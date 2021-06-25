export const getBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        if (file && file.type.match('image.*')) {
            reader.readAsDataURL(file);
        }
    });
}