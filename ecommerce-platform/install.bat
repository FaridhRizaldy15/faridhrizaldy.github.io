@echo off
echo ================================
echo Installing Dependencies...
echo ================================
echo.

cd /d "%~dp0"
npm install

echo.
echo ================================
echo Installation Complete!
echo ================================
echo.
echo Run 'start-dev.bat' to start the development server
echo.

pause
