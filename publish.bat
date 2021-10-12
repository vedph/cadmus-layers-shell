@echo off
echo NPM PUBLISH
echo Before continuing, ensure that:
echo - you are logged in (npm whoami)
echo - you have successfully rebuilt all the libraries (npm run build-lib)
pause
cd .\dist\myrmidon\cadmus-layers
call npm publish --access=public
cd ..\..\..
pause
