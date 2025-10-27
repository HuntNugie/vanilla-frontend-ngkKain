import sendForm from "./form.js";
import { navigateTo } from "./navigate.js";
import { getData, postData } from "./api.js";
import axios from "axios";
export const checkPath = (routes) => {
    const currentPath = window.location.pathname;
    const result = routes.find(r => r.path === currentPath);
    return result
}

export const klikPath = async (event) => {
    event.preventDefault();
    // untuk berpindah halaman
    if (event.target.classList.contains("navigate-link")) {
        navigateTo(event.target.href)
        //untuk dropdown profile  
    } else if (event.target.id === "profileBtn") {
        document.getElementById("dropdownMenu").classList.toggle("hidden")
        if (!document.getElementById("profileBtn").contains(event.target)) {
            document.getElementById("dropdownMenu").classList.toggle("hidden")
        }
        // untuk registrasi
    } else if (event.target.classList.contains("submit-register")) {
        try {
            const data = sendForm(".form-register")
            const url = import.meta.env.VITE_API_REGISTER
            // kirimkan
            const kirim = await postData(url, data)
            Swal.fire({
                title: kirim.data.message,
                icon: "success",
                draggable: true
            });
            navigateTo("/login")
        } catch (error) {
            document.querySelector(".form-register").reset();
            if (typeof error.message === "string") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            } else {
                const err = error.message.map((e) => {
                    return `<li>${e.msg}</li>`
                }).join("")
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    html: `<ul>${err}</ul>`,
                });
            }
        }
        // untuk login
    } else if (event.target.classList.contains("submit-login")) {
        console.log("berhasil login")
        try {
            const data = sendForm(".form-login")
            const url = import.meta.env.VITE_API_LOGIN
            // kirimkan
            const kirim = await postData(url, data)
            Swal.fire({
                title: kirim.data.message,
                icon: "success",
                draggable: true
            });
            navigateTo("/dashboard")
        } catch (error) {
            document.querySelector(".form-login").reset();
            if (typeof error.message === "string") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            } else {
                const err = error.message.map((e) => {
                    return `<li>${e.msg}</li>`
                }).join("")
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    html: `<ul>${err}</ul>`,
                });
            }
        }
        // untuk logout
    } else if (event.target.classList.contains("logout")) {
        try {
            const logout = await postData(import.meta.env.VITE_API_LOGOUT);
            navigateTo("/login")
        } catch (error) {
            console.log(error)
        }
        // untuk form tambah produk
    } else if (event.target.classList.contains("add-produk")) {
        try {
            const data = sendForm(".form-addProduk")
            const add = await postData(import.meta.env.VITE_API_ADD_PRODUK, data)
            Swal.fire({
                title: "berhasil menambahkan data",
                icon: "success",
                draggable: true
            });
            document.querySelector(".form-addProduk").reset();
        } catch (error) {
            document.querySelector(".form-addProduk").reset();
            if (typeof error.message === "string") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            } else {
                const err = error.message.map((e) => {
                    return `<li>${e.msg}</li>`
                }).join("")
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    html: `<ul>${err}</ul>`,
                });
            }
        }
    } else if (event.target.classList.contains("delete-produk")) {
        Swal.fire({
            title: "APAKAH KAMU YAKIN INGIN MENGHAPUS DATA INI?",
            text: "DATA INI AKAN DI HAPUS PERMANEN",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const url = import.meta.env.VITE_API_DELETE_PRODUK
                const baseUrl = import.meta.env.VITE_API_URL
                const id = event.target.dataset.id
                const request = await axios.delete(`${baseUrl}${url}/${id}`, {
                    withCredentials: true
                });
                Swal.fire({
                    title: request.data.message,
                    icon: "success",
                    draggable: true
                });
                navigateTo("/produk")
            }
        }).catch(err => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.data.message,
            });
        });
        // untuk halaman detail produk
    }else if(event.target.classList.contains("detail-produk")){
       const id = event.target.dataset.id
        navigateTo(`/produk/show?id=${id}`)
    }else if(event.target.classList.contains("edit-produk")){
        const id = event.target.dataset.id
        navigateTo(`/produk/edit?id=${id}`)
    }
}