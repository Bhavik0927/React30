import { create } from "zustand";

const userUserStore = create((set) =>({
    user:{name:"Bhavik", role:"developer"}
}))

export default userUserStore;