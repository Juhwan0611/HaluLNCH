@echo off
set JAR_PATH=%~dp0fabric-installer-1.0.1.jar
set MC_DIR=%~dp0.minecraft
mkdir "%MC_DIR%"
java -jar "%JAR_PATH%" client -mcversion 1.20.1 -dir "%MC_DIR%"
pause
