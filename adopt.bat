@echo off
cd /d %~dp0%

rd .\.git /s /q

del .\adopt.sh
start /b cmd /c del "%~f0"&exit /b

@echo on
