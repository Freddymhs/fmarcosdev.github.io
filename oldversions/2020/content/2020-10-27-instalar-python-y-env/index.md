---
title: "instalar-python/Django-y-env"
path: blog/instalar-python-y-env
tags: [fmarcosdev]
cover: ./KZ.jpg
date: 2020-10-27
draw: true
excerpt: instalar-python--virtualEnv-django
---

# Requerimientos generales

- instalar instalar python en el sistema operativo 
- configura path , para que se le reconozca en el sistema.
- instalar pip o pip3
- crear los virtualenvs en algun directorio ademas de algun proyecto.


# crear y activar el entorno virtual para 1 proyecto
- crear 
    - virtualenv init --python=python3 
- activar
    - cd/init/bin/
    - source activate
- revisar que este activo
    - pip3 freeze (muestra dependecias instaladas,debe estar vacio!)

# instalacion de django
- instalando django
    - pip install django
- creando proyecto
    - cd .. 
    - mkdir [miproyectodjango]
- iniciar proyecto
    - cd [miproyectodjango]
    - django-admin startproject django_init
    - cd django_init
    - python manage.py runserver
    - code . para revisar
    - 
# extras!
pip3 install autopep8
pip3 install pylint



pip3 freeze muestra dependecias