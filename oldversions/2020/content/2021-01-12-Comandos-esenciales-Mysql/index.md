---
title: "Comandos-esenciales-Mysql"
path: blog/omandos-esenciales-Mysql
tags: [fmarcosdev, sql]
cover: ./popular-commands-sql.jpg
date: 2021-01-12
draw: true
excerpt: Comandos-esenciales-Mysql
---

## comandos

- conexion a bd

mysql -u _ -p _ -h \* -D basededatos || mysql -u root

- creacion bd
  CREATE DATABASE basededatos;
- usar bd
  use basededatos;
- crear tabla  
  create table PRODUCTOS( nombre varchar(60) , precio int(10) , tipo varchar(40));
- mostrar esquema de tabla
  describe PRODUCTOS;
- insert data en tabla
  insert into PRODUCTOS(nombre,precio,tipo) values("Nintendo switch", 240000,"consola");
- edit schema tabla
  alter table PRODUCTOS add empresa varchar(50);
- edit schema campo de tabla
  alter table PRODUCTOS CHANGE nombre nombreempresa VARCHAR(10) NOT NULL;
- acutaliza dato en la tabla
  update PRODUCTOS set MARCA = 'NUEVAMARCA' where EMPLEADO_ID = 1056;
- crear tabla primaria
  create table category( id int(11)AUTO_INCREMENT PRIMARY KEY , name varchar(255) );
- crear tabla asociada
  CREATE TABLE product (id int(11)AUTO_INCREMENT PRIMARY KEY , name varchar(255) ,url_image varchar(255) ,price float ,discount int(11) ,FOREIGN KEY(category) REFERENCES category(id));

## generales

- mostrar bases de datos
  show database;
- usar una base de datos
  use midb;
- mostrar version
  SELECT version();
- ver fecha
  SELECT now();
- estado
  STATUS;
- ver tablas
  SHOW TABLES;
- esquema de tabla
  DESCRIBE mitabla;
- esquema de tabla x tipo
  DESCRIBE mitabla_type;

## operaciones especificas

SELECT CONCAT('Bernardo','Pineda')  
SELECT dayname('1992-12-22');
SELECT 1+1;
SELECT ROUND(3.1416)

## import export

- importar
  -u root -D mibasededatos < mirespaldo.sql
- exportar
  mysqldump -h hostdebasedadtos -u usuario -p password > /ruta/absoluta/db_backup_name.sql

## comandos de uso general

```
select [campo] from [mitabla];   // algunos
select [campo],[campo],[campo] from [mitabla];
select * from [mitabla]; // todo
select * from [mitabla] LIMIT 1;    // primero
select * from [mitabla] order by ID DESC LIMIT 1; // ultimo
select * from [mitabla] where [campo]=[valor];
select * from [mitabla] where [campo]>[valor];
select * from [mitabla] where [campo] <> [valor]; // todos excepto valor
select * from [mitabla] where [campo] >= [valor] AND [campo_] <= [valor] // doble filtro aplicado
select * from [mitabla] where [campo] >= [valor] OR [campo_date] > [val-o-r] // filtro inclusivo
select * from [mitabla] where [campo_date] <= [val-o-r] // filtro anterior a fecha
```

```
INSERT INTO [mitabla] ([campo],[campo],[campo],[campo]) VALUES(null,true,'200',92)
INSERT INTO  [mitabla] SET [campo]=null , [campo]=true,[campo]='200',[campo]=92

```

```
DELETE FROM [mitabla]; // peligroso :/
DELETE FROM [mitabla] where id= 10  LIMIT 1 ; // usar limit para seguridad
```

```
UPDATE [mitabla] SET [CAMPO] = [valor] where [campo_id] = [valor_id] LIMIT 1;
UPDATE [mitabla] SET [CAMPO] = [valor] ,[CAMPO] = [valor]  where [campo_id] = [valor_id] LIMIT 1; // edicion multi campo
```

- mejores filtros

```
select * from [mitabla] WHERE [campo] not like [valor]
select * from [mitabla] WHERE [campo] like [valor]
select * from [mitabla] WHERE [campo] like [%valor] // busca al final que tenga
select * from [mitabla] WHERE [campo] like [%valor%] // busca al final y al principio
select * from [mitabla]  ORDER by [campo] ASC // ordenado
select * from [mitabla]  ORDER by [campo] DESC // descendente
select * from [mitabla] SELECT 1; // para seguridad de alterar solo 1
select * from [mitabla] SELECT 10,20; // para un paginado
```

- seleccion de multiples tablas

```
SELECT [campoT1].[propiedad] , [campoT1].[propiedad], [campoT2].*  FROM [tabla1],[tabla2]// pero regresa muchos repetidos.
SELECT [campoT1].[propiedad] , [campoT1].[propiedad], [campoT2].*  FROM [tabla1],[tabla2] WHERE [campoT1].[propiedad]==[campoT2].[propiedad] // no repite datos
SELECT [campoT1].[propiedad] , [campoT1].[propiedad], [campoT2].*  FROM [tabla1] INNER JOIN [tabla2] ON [campoT1].[propiedad]==[campoT2].[propiedad] // clasico
    - que es inner join (es una union de tablas)
    - que es LEFT JOIN (left sera el 'PIVOT' y los que no tiene relacion)
    - que es RIGHT JOIN (los que no tiene relacion y right sera el 'pivot')
```

- cantidades de registros

```
SELECT COUNT(*) FROM [tabla]
SELECT COUNT(*) FROM [tabla] WHERE [campo] lIKE [%valor]

```

- alias de campos

```
SELECT COUNT(*) as total from [tabla]
SELECT id as identificador from [tabla]
```

- subquery

```
SELECT * FROM (SELECT [campo],[campo],[campo] FROM [tabla] where [campo] == '2020-12-22') as fakeTabla;
```

## comandos generales de uso en CLI

```
CREATE TABLE category(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);


CREATE TABLE product(
    id int(11)AUTO_INCREMENT PRIMARY KEY ,
    name varchar(255) ,
    url_image varchar(255) ,
    price float ,
    discount int(11) ,
    category INT,
    CONSTRAINT fk_category
    FOREIGN KEY (category)
    REFERENCES category(id)
);

```

- mejor forma

```
CREATE TABLE categories(
    categoryId INT AUTO_INCREMENT PRIMARY KEY,
    categoryName VARCHAR(100) NOT NULL
) ENGINE=INNODB;

CREATE TABLE products(
    productId INT AUTO_INCREMENT PRIMARY KEY,
    productName varchar(100) not null,
    categoryId INT,
    CONSTRAINT fk_category
    FOREIGN KEY (categoryId)
        REFERENCES categories(categoryId)
) ENGINE=INNODB;
```
