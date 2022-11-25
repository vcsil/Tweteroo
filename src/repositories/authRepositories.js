export const usuarios = [
    {
        username: "Teste",
        avatar: "https://haieng.com/wp-content/uploads/2017/10/test-image-500x500-300x300.jpg",
    },
];

export function insertUser(username, avatar) {
    usuarios.push({ username, avatar });
    return;
}
