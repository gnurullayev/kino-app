type SetItem = (key: string, data: string) => void;
type GetItem = (key: string) => string | null;
type RemoveItem = (key: string) => void;

export const setItem: SetItem = (key, data) => {
  try {
    localStorage.setItem(key, data);
  } catch {
    console.log("malumot saqlanmadi hatolik yuz berdi");
  }
};

export const getItem: GetItem = (key) => {
  try {
    const str: string | null = localStorage.getItem(key);
    return str;
  } catch {
    console.log("malumot topilmadi hatolik yuz berdi");
    return null;
  }
};

export const removeItem: RemoveItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {
    console.log("malumot O'shirilmadi hatolik yuz berdi");
  }
};
