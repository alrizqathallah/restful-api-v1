# Membangun Aplikasi Backend Server dengan NODEJS, EXPRESS dan MYSQL

<hr>

## FOLDER PROYEK

Pertama, buat folder induk proyek bernama `restful-api-v1` (nama bisa disesuaikan):

```bash
mkdir restful-api-v1 && cd restful-api-v1
```

Buka folder ini menggunakan code editor pilihanmu (Visual Studio Code, WebStorm, Neovim, dll).

Selanjutnya, buat folder baru di dalamnya dengan nama server, yang akan menjadi root folder dari proyek backend:

```bash
mkdir server & cd server
```

> Catatan: Pastikan terminal aktif berada di dalam folder `server` sebelum mulai menginisialisasi proyek dengan `npm` atau `yarn`.

<br>

### Inisialisasi dengan Package Manager

Pastikan Node.js telah terinstal di lokal mesin (local machine), dan package manager seperti `npm`, `yarn`, atau `pnpm` sudah tersedia.

**Cek versi Node.js dan package manager yang digunakan:**

```bash
node --version
v22.13.1

npm --version
10.9.2

yarn --version
1.22.22
```

<br>

### Inisialisasi proyek dengan package manager:

Jika menggunakan yarn, jalankan:

```bash
yarn init -y
```

Jika menggunakan npm, jalankan:

```bash
npm init -y
```

Jika menggunakan pnpm, jalankan:

```bash
pnpm init
```

> Catatan: Sesuaikan perintah dengan package manager yang kamu pilih. Contoh di atas menggunakan `yarn`.

Setelah perintah dijalankan, sebuah file `package.json` akan otomatis dibuat di dalam folder server, yang berfungsi untuk mengelola metadata proyek dan dependensi yang akan digunakan.

### Inisialisasi Git dan GitHub

Inisialisasikan Git di dalam proyek untuk membuat repository lokal:

```bash
git init
```

Selanjutnya, hubungkan repository lokal dengan repository online (seperti GitHub, GitLab, atau Bitbucket):

```bash
git remote add origin https://github.com/username/nama-repo.git
```

> Catatan: Pastikan kamu sudah membuat repository terlebih dahulu di GitHub (atau layanan lainnya), lalu salin URL HTTPS atau SSH dari repository tersebut.

Setelah remote ditambahkan, kamu dapat melakukan commit dan push pertama kali:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

> Tips: Gunakan branch main sebagai standar utama jika belum diatur otomatis oleh Git.