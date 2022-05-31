const apiConfig = {
    baseUrl: process.env.REACT_APP_API,
    apiKey: '98dba0336d3fe3129d0358a3a8b14d12',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    width500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export { apiConfig };
