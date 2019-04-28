#build the package
npm run build-lib

#copy from dist of widget directory to main directory
cp -R dist/weather/. ../main/node_modules/@weather/weather/
