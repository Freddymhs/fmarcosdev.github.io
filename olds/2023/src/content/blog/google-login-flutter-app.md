---
title: "Supabase (Google Prov) en Flutter Multiplataforma"
description: "Guía paso a paso para implementar autenticación de Google en proyectos Flutter"
pubDate: "Jun 12 2025"
heroImage: "./skills-svg/flutter.svg"
---

# Cómo Implementar Google Sign-In con Supabase en Flutter (Android/Web/iOS)

Esta guía te llevará a través del proceso de integrar la autenticación de Google en tu proyecto Flutter utilizando Supabase.

## Referencia
[Video tutorial en YouTube](https://www.youtube.com/watch?v=utMg6fVmX0U)

## Pasos de Implementación

### 1. Preparación del Proyecto Flutter

1. Abre tu proyecto Flutter.
2. Instala las siguientes dependencias:
   - Google Sign-In: `flutter pub add google_sign_in`
   - Supabase Flutter: `flutter pub add supabase_flutter`

### 2. Configuración en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Crea credenciales para:
   - Chrome
   - Android
     - Obtén el `package name` de `build.gradle`
     - Obtén el `finger-print` con el comando:
       ```
       keytool -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore -storepass android
       ```
   - iOS
     - Obtén el `package id` de Xcode: `open ios/runner.xcworkspace`
     - Ruta: runner -> general -> Identity -> Bundle Identifier

### 3. Configuración en Supabase

1. Crea un proyecto en Supabase.
2. En Authentication -> Providers -> Google:
   - Habilita Google
   - Activa "skip none checks for ios"
   - Configura los IDs de cliente y secretos
   - Añade `http://localhost:3000/` en URL CONFIGURATION
   - Copia la URL de callback de Supabase a Google Console

### 4. Configuración iOS

1. Sigue los pasos en [pub.dev/packages/google_sign_in_ios#ios-integration](https://pub.dev/packages/google_sign_in_ios#ios-integration).
2. Edita `info.plist` según las instrucciones.

### 5. Configuración en main.dart

1. Inicializa Supabase:
   ```dart
   await Supabase.initialize(url: 'https://...', anonKey: 'somestring');
   ```
2. Obtén la URL y ANON key de Supabase.com -> Project Settings -> API.

### 6. Configuración Final

- En Supabase -> URL CONFIGURATION:
  - Local: usa `localhost:3000`
  - Producción: usa la URL real de tu aplicación

## Código de Ejemplo

```dart

import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'src/settings/settings_controller.dart';
import 'src/settings/settings_service.dart';

final supabase = Supabase.instance.client;

void main() async {
  // Set up the SettingsController, which will glue user settings to multiple
  // Flutter Widgets.
  final settingsController = SettingsController(SettingsService());

  // Load the user's preferred theme while the splash screen is displayed.
  // This prevents a sudden theme change when the app is first displayed.
  await settingsController.loadSettings();

  // supabase start
  await Supabase.initialize(
      url: 'https://sample.supabase.co',
      anonKey:'sample'
      );

  // Run the app and pass in the SettingsController. The app listens to the
  // SettingsController for changes, then passes it further down to the
  // SettingsView.
  // runApp(MyApp(settingsController: settingsController));
  // test supabase client with google sign in
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String? _userId;

  @override
  void initState() {
    super.initState();
    supabase.auth.onAuthStateChange.listen((data) {
      setState(() {
        _userId = data.session?.user?.id;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Login Page'),
      ),
      body: Center(
        child: ElevatedButton(
            onPressed: () async {
              if (!kIsWeb && (Platform.isAndroid || Platform.isIOS)) {
                await googleSignIn();
              } else {
                webGoogleSignIn();
              }
            },
            child: Text('Hola-> ${_userId}')),
      ),
    );
  }
}

Future<void> webGoogleSignIn() async {
  supabase.auth.signInWithOAuth(OAuthProvider.google);
}

Future<AuthResponse> googleSignIn() async {
  /// TODO: update the Web client ID with your own.
  ///
  /// Web Client ID that you registered with Google Cloud.
  const webClientId ='sample.apps.googleusercontent.com';

  /// TODO: update the iOS client ID with your own.
  ///
  /// iOS Client ID that you registered with Google Cloud.
  const iosClientId ='sample.apps.googleusercontent.com';

  // Google sign in on Android will work without providing the Android
  // Client ID registered on Google Cloud.

  final GoogleSignIn googleSignIn = GoogleSignIn(
    clientId: iosClientId,
    serverClientId: webClientId,
  );
  final googleUser = await googleSignIn.signIn();
  final googleAuth = await googleUser!.authentication;
  final accessToken = googleAuth.accessToken;
  final idToken = googleAuth.idToken;

  if (accessToken == null) {
    throw 'No Access Token found.';
  }
  if (idToken == null) {
    throw 'No ID Token found.';
  }

  return supabase.auth.signInWithIdToken(
    provider: OAuthProvider.google,
    idToken: idToken,
    accessToken: accessToken,
  );
}

```

## Notas Importantes

- Asegúrate de reemplazar todos los valores de muestra (URLs, claves, IDs) con tus propios datos.
- Prueba la autenticación en todas las plataformas objetivo (Android, iOS, Web) antes de lanzar.
- Mantén tus claves y secretos seguros y no los compartas públicamente.
- Falta manejar initialState de supabase , esto se ejecuta al cargar la web/app y busca la session de google que podemos usar para redigir al usuario :)

¡Buena suerte con tu implementación de Google Sign-In en Flutter!