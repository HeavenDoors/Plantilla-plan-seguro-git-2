const btnOlvidastePwd = document.getElementById("btnOlvidastePwd");
const modalRecuperacion = document.getElementById("modalRecuperacion");

btnOlvidastePwd?.addEventListener("click", () => {
    const input = 0;
    modalRecuperacion.classList.add("active");
});

function cerrarModal() {
    modalRecuperacion.classList.remove("active");
}

const togglePassword = document.getElementById("togglePassword");


if (togglePassword) {
    togglePassword.onclick = function () {
        const input = document.getElementById("inputPassword");
        const icon = document.getElementById("togglePasswordIcon");

        if (!input || !icon) return;

        if (input.type === "password") {
            input.type = "text";
            icon.classList.remove("bi-eye-slash");
            icon.classList.add("bi-eye");
        } else {
            input.type = "password";
            icon.classList.remove("bi-eye");
            icon.classList.add("bi-eye-slash");
        }
    };
}