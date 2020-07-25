const validNameLinux = (name: string): string | null => {
    const nullChar = String.fromCharCode(0);
    if (name.length > 255) return "Dir name can't be longer than 255 characters";
    for (let i = 0; i < name.length; i++) {
        if (name[i] === "/" || name[i] === nullChar) {
            return "Dir name can't contain '/'";
        }
    }
    return null;
}

export {
    validNameLinux
}