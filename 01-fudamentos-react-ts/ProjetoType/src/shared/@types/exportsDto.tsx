export interface Author {
    name: string;
    avatarUrl: string;
    role: string;
}
export interface Content {
    type: 'paragraph' | 'link'; // O tipo 'type' aceita apenas 'paragraph' ou 'link'
    content: string;
}