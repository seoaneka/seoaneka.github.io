const submitForm = document.getElementById("submitForm");
const progressBar = document.getElementById("progressBar");
const progressContainer = document.getElementById("progressContainer");
const progressText = document.getElementById("progressText");
const progressInfo = document.getElementById("progressInfo");

submitForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const no_hp = document.getElementById("no_hp").value;
    if (no_hp.toLowerCase() !== "yes") {
        alert("Ketik 'yes' untuk melanjutkan.");
        return;
    }

    console.log('Input diterima:', no_hp);

    submitForm.style.display="none";
    progressContainer.style.display="block";

    let progress = 0;

    function simulateProgress() {
        if (progress < 100) {
            progress += 20;
            progressBar.style.width = `${progress}%`;
            progressInfo.textContent = `${progress}%`;

            let progressTextContent = "";
            if (progress < 30) {
                progressTextContent = "Mencari Server...";
            } else if (progress < 40) {
                progressTextContent = "Memuat Server...";
            } else if (progress < 60) {
                progressTextContent = "Block Firewall...";
            } else if (progress < 80) {
                progressTextContent = "Injecting bot...";
            } else if (progress < 90) {
                progressTextContent = "Locking bot...";
            } else {
                progressTextContent = "Pencarian Server Berhasil...";
            }
            progressText.textContent = progressTextContent;

            setTimeout(simulateProgress, 100);
        } else {
            progressText.textContent = "Success Injection";
            simulateLoading();
        }
    }

    function simulateLoading() {
        progressText.textContent = "SERVER SUCCESS INJECTED, WELCOME TO YOUR WEBSITE!...";

        alert("Website Dengan Server Yang anda pilih telah berhasil di inject, Silahkan daftar dan gunakan akun PRO anda sekarang! Selamat Bermain!");

        let loadingProgress = 0;

        function updateLoading() {
            if (loadingProgress < 100) {
                loadingProgress += 20;
                progressBar.style.width = `${loadingProgress}%`;
                progressInfo.textContent = `${loadingProgress}%`;
                setTimeout(updateLoading, 100);
            } else {
                window.location.href = "https://gainanma365.com/register";
            }
        }

        updateLoading();
    }

    simulateProgress();
});