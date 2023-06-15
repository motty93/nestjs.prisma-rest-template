-- must change your name and databasename, passward.
CREATE ROLE nestjs_admin LOGIN PASSWORD 'nestjs_psql';
CREATE DATABASE nestjs_admin;
CREATE DATABASE nestjs_test;
GRANT ALL PRIVILEGES ON DATABASE nestjs_admin TO nestjs_admin;
GRANT ALL PRIVILEGES ON DATABASE nestjs_test TO nestjs_admin;
ALTER ROLE nestjs_admin WITH CREATEROLE CREATEDB SUPERUSER;
