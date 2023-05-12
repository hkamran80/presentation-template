type Author = { name: string; twitter?: string };

export type PresentationConfig = {
    title: string;
    author?: Author;
    description?: string;
    canonicalLink?: string;
};
