@echo on
cd /d %~dp0%

rd .\.git /s /q

del .\adopt.sh
del .\adopt.bat

@echo off
