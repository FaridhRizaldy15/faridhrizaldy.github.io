@echo off
echo ====================================
echo   Starting Portfolio Dev Server
echo ====================================
echo.

cd /d "%~dp0"

echo Installing dependencies (if needed)...
call npm install

echo.
echo Starting development server...
echo Server akan buka di http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
