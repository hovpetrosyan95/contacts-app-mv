export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // Handle file load event
    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        reject(new Error("File could not be read"));
      }
    };

    // Handle errors
    reader.onerror = () => {
      reject(reader.error);
    };

    // Start reading the file as a Data URL
    reader.readAsDataURL(file);
  });
};
