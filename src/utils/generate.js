import __vite__cjsImport0_cryptoJs from "/node_modules/.vite/deps/crypto-js.js?v=df9dfa09"; 
const CryptoJS = __vite__cjsImport0_cryptoJs.__esModule ? __vite__cjsImport0_cryptoJs.default : __vite__cjsImport0_cryptoJs;

export const getAvatar = (email) => {
    const hash = CryptoJS.MD5(email.trim().toLowerCase()).toString(); // Adiciona .toString() para obter o hash como string
    return `https://www.gravatar.com/avatar/${hash}?s=40&d=identicon`;
}

export const getRandomImage = () => {
    return `https://picsum.photos/600/400?random=${Math.random()}`; // Corrigido de "radom" para "random"
}
