@echo off
echo ====================================
echo   Building Portfolio for Production
echo ====================================
echo.

cd /d "%~dp0"

echo Building project...
call npm run build

echo.
echo ====================================
echo Build complete! 
echo Output folder: dist/
echo ====================================
echo.

pause
