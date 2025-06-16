---
title: "instalar-python/Django-y-env"
path: blog/instalar-python-y-env
tags: [fmarcosdev]
cover: ./KZ.jpg
date: 2020-10-27
draw: true
excerpt: instalar-python--virtualEnv-django
---

# Descripcion general

- instalar instalar python en el sistema operativo
- configura path , para que se le reconozca en el sistema.
- instalar pip o pip3
- instalar y crear los virtualenvs en algun directorio ademas de algun proyecto.

# guia basica

python -m virtualenv CREATE_API-Django

requeriminetos en el computador previos :
Pip3 install virtualenv

creando mi carpeta para proyectos.
mkdir carpeta general
cd carpeta general - > mkdir EntornosVirtuales
cd carpeta general - > mkdir Proyectos

Cd EntornosVirtuales  
----python3 -m vent mientornonuevo  
----source myFisrtEnvirment/bin/activate. //on

Cd Proyectos  
----pip3 install Django // queda global?  
----Django-admin startproject Miproyecto

cd Miproyecto  
----python manage.py runserver
