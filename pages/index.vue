<template>
  <div>
    <nav class="
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-slate-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  navbar navbar-expand-lg navbar-light
  ">
  <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  <button class="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
    class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
  </svg>
  </button>
  <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
  <a class="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      " href="#">
    <img src="/rpl.png" style="height: 50px" alt=""
      loading="lazy" />
  </a>
  <!-- Left links -->
  <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
    <li class="nav-item p-2">
      <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#home">Beranda</a>
    </li>
    <li class="nav-item p-2">
      <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#about">About</a>
    </li>
    <li class="nav-item p-2">
      <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#projek">Projek</a>
    </li>
    <li class="nav-item p-2">
      <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#pendidikan">Pendidikan</a>
    </li>
    <li class="nav-item p-2">
      <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#blog">Blog</a>
    </li>
    <li class="nav-item p-2">
      <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#kontak">Contack</a>
    </li>
  </ul>
  </div>
  </div>
  </nav>
     <section id="home" class="pt-5  bg-slate-100">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full self-center pr-4 pl-16 lg:w-1/2 sm:w-10 md:w-1/2">
              <h1 class="text-base font-semibold text-teal-500 md:text-xl" >Hallo Semua👋,
                Saya <span class="block font-bold text-slate-900 text-4xl mt-1 lg:text-5xl md:text-4xl"> Alvin</span></h1>
              <h2 class="font-medium text-slate-500 text-lg mb-5 lg:text-2xl md:text-2xl">Pelajar SMKN 2 Tenggalek</h2>
              <p class="font-medium text-slate-600 mb-10 leading-relaxed md:text-lg">Jurusan Rekaya Perangkat Lunak  <span class="text-slate-900 font-semibold">XI RPL A</span></p>
              <a href="https://wa.me/628884845979" class="text-base font-semibold text-white bg-teal-500 py-3 px-8 rounded-full hover:shadow-lg
              hover:opacity-80 transition duration-300 ease-in-out">Hubungi Saya
            </a>
          </div>
          <div class="w-full self-end px-4 lg:w-1/2 sm:w-8 md:w-1/2">
            <div class="relative mt-10 lg:mt-9 lg:right-0">
              <img src="/botak.png" alt=""
              class="max-w-full mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="pt-36 pb-32">
       <div class="container">
        <div class="flex flex-wrap">
         <div class="w-full px-4 mb-10 lg:w-1/2 md:w-1/2">
            <h4 class="text-teal-500 font-bold uppercase mb-5">Tentang Saya</h4>
            <h2 class="font-bold text-slate-900 text-3xl mb-5 max-w-md lg-text-4xl">Alamat Rumah</h2>
            <p class="font-medium text-slate-500 text-base max-w-xl lg:text-lg">Jalan Pangeran Diponegoro No 74 Trenggalek Sumbergedong</p>
         </div>
         <div class="w-fullp px-4 lg:w-1/2 md:w-1/2">
          <h3 class="text-teal-500 font-bold uppercase mb-5 lg:pt-10">Berteman Yuk</h3>
          <h2 class="font-bold text-slate-900 text-3xl mb-5 max-w-md lg-text-4xl">Sosial Mediaku</h2>
          <p class="font-medium text-slate-500 text-base mb-6 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, vitae magni!
          </p>
          <div class="flex items-center mt-5">
            <!--instagram-->
            <a href="https://www.instagram.com/alvinn_t.ahmd/" target="_blank" class="w-9 h-9 mr-3 rounded-full
            flex justify-center items-center  text-slate-300
            hover:border-green-400 hover:bg-green-400">
            <svg role="img" widht="20"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            </a>
             <!--Tiktok-->
             <a href="https://www.tiktok.com/@alvn_t.ahmd" target="_blank" class="w-9 h-9 mr-3 rounded-full
             flex justify-center items-center  text-slate-300
             hover:border-green-400 hover:bg-green-400">
             <svg role="img" widht="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
             </a>
              <!--Tiktok-->
              <a href="https:facebook.com" target="_blank" class="w-9 h-9 mr-3 rounded-full
              flex justify-center items-center  text-slate-300
              hover:border-green-400 hover:bg-green-400">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <!--whatsapp-->
              <a href="https://wa.me/628884845979" target="_blank" class="w-9 h-9 mr-3 rounded-full
              flex justify-center items-center  text-slate-300
              hover:border-green-400 hover:bg-green-400">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>
          </div>
         </div>
        </div>
       </div>
    </section>
    <section id="projek" class="pt-36 pb-16 bg-slate-100">
      <div class="container">
        <div class="w-full px-4">
          <div class="max-w-xl mx-auto text-center mb-16">
            <h4 class="font-semibold text-lg text-teal-500 mb-2">Hasil Projek</h4>
            <h2 class="font-bold text-slate-900 text-3xl mb-4  sm:text-4xl
            lg:text-5xl">Projek Saya</h2>
            <p class="font-medium text-md text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
               pariatur velit aliquid nisi iusto excepturi?
          </p>
          </div>
        </div>
        <div class="wfull px-4 flex flex-wrap justify-center xl:w-10/12
        xl:mx-auto">
          <div class="mb-12 p-4 md:w-1/2">
            <div class="rounded-md shadow-md overflow-hidden hover:scale-110 transition duration-300 ease-in-out">
              <img src="/1.png" alt="" width="w-full">
            </div>
            <h3 class="font-semibold text-xl text-slate-900 mt-5 
            mb-3">Landing Page Alvin Top </h3>
            <p class="fontt-medium text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsum
               asperiores cumque eos nemo at nam!</p>
          </div>
          <div class="mb-12 p-4 md:w-1/2">
            <div class="rounded-md shadow-md overflow-hidden hover:scale-110 transition duration-300 ease-in-out">
              <img src="/i.png" alt="" width="w-full">
            </div>
            <h3 class="font-semibold text-xl text-slate-900 mt-5 
            mb-3">form login Alvin Top </h3>
            <p class="fontt-medium text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsum
               asperiores cumque eos nemo at nam!</p>
          </div>
          <div class="mb-12 p-4 md:w-1/2">
            <div class="rounded-md shadow-md overflow-hidden hover:scale-110 transition duration-300 ease-in-out">
              <img src="/s.png" alt="" width="w-full">
            </div>
            <h3 class="font-semibold text-xl text-slate-900 mt-5 
            mb-3">form daftar Alvin Top </h3>
            <p class="fontt-medium text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsum
               asperiores cumque eos nemo at nam!</p>
          </div>
          <div class="mb-12 p-4 md:w-1/2">
            <div class="rounded-md shadow-md overflow-hidden hover:scale-110 transition duration-300 ease-in-out">
              <img src="/izin.png" alt="" width="w-full">
            </div>
            <h3 class="font-semibold text-xl text-slate-900 mt-5 
            mb-3">Landing Page Izinpak</h3>
            <p class="fontt-medium text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsum
               asperiores cumque eos nemo at nam!</p>
          </div>
        </div>
      </div>
    </section>
    <section id="pendidikan" class="pt-36 pb-32 bg-slate-700">
      <div class="container">
        <div class="w-full px-4">
          <div class=" mx-auto text-center mb-16">
            <h4 class="font-semibold text-lg text-teal-500 mb-2">Pendidikan</h4>
            <h2 class="font-bold text-white text-3xl mb-4 sm:text-4xl
            lg:text-5xl">Perjalanan Pendidikan</h2>
            <p class="font-medium text-md text-slate-500 md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
               pariatur velit aliquid nisi iusto excepturi?
          </p>
          </div>
        </div>
        <div class="w-full px-4">
          <div class="flex flex-wrap items-center justify-center">
            <a href="" class="max-w-[120px] mx-4 py-4 grayscale
            opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100
            lg:mx-6 xl:mx-8">
              <img src="/smk.png" alt="">
            </a>
            <a href="" class="max-w-[120px] mx-4 py-4 grayscale
            opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100
            lg:mx-6 xl:mx-8">
              <img src="/smp.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="blog" class="pt-36 pb-32 bg-slate-100">
      <div class="container">
        <div class="w-full px-4">
          <div class="max-w-xl mx-auto text-center mb-16">
            <h4 class="font-semibold text-lg text-teal-500 mb-2">Blog</h4>
            <h2 class="font-bold text-slate-900 text-3xl mb-4  sm:text-4xl
            lg:text-5xl">Berita Terkini</h2>
            <p class="font-medium text-md text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
               pariatur velit aliquid nisi iusto excepturi?
          </p>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3 md:w-1/2 hover:scale-90 transition duration-300 ease-in-out">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img src="https://source.unsplash.com/360x200?mechanical+keyboard" alt="" class="w-full">
              <div class="py-5 px-3">
                <h3>
                  <a href="" class="block mb-3 font-semibold text-xl
                  text-slate-900 hover:text-teal-500 truncate">Review keyboard</a>      
                  </h3>
                   <p class="font-medium text-base text-slate-500
                   mb-4">Lorem ipsum dolor sit amet consectetur
                   adipisicing elit. Vitae, numquam!</p>
                   <a href="#" class="font-medium text-sm text-white bg-teal-500 py-2 px-4 rounded-lg hover:opacity-80 mb-6" >Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3 md:w-1/2 hover:scale-90 transition duration-300 ease-in-out">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img src="https://source.unsplash.com/360x200?coffee" alt=""
               class="w-full">
              <div class="py-5 px-3">
                <h3>
                  <a href="" class="block mb-3 font-semibold text-xl
                  text-slate-900 hover:text-teal-500 truncate">Menikmati Secangkir Kopi</a>      
                  </h3>
                   <p class="font-medium text-base text-slate-500
                   mb-4">Lorem ipsum dolor sit amet consectetur
                   adipisicing elit. Vitae, numquam!</p>
                   <a href="#" class="font-medium text-sm text-white bg-teal-500 py-2 px-4 rounded-lg hover:opacity-80 mb-6" >Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3 md:w-1/2 hover:scale-90 transition duration-300 ease-in-out">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10 ">
              <img src="https://source.unsplash.com/360x200?programming"  alt=""
               class="w-full ">
              <div class="py-5 px-3">
                <h3>
                  <a href="" class="block mb-3 font-semibold text-xl
                  text-slate-900 hover:text-teal-500 truncate">Tips Belajar Programming</a>      
                  </h3>
                   <p class="font-medium text-base text-slate-500
                   mb-4">Lorem ipsum dolor sit amet consectetur
                   adipisicing elit. Vitae, numquam!</p>
                   <a href="#" class="font-medium text-sm text-white bg-teal-500 py-2 px-4 rounded-lg hover:opacity-80 mb-6" >Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3 md:w-1/2 hover:scale-90 transition duration-300 ease-in-out">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10 ">
              <img src="https://source.unsplash.com/360x200?coding"  alt=""
               class="w-full ">
              <div class="py-5 px-3">
                <h3>
                  <a href="" class="block mb-3 font-semibold text-xl
                  text-slate-900 hover:text-teal-500 truncate">Tips Belajar coding</a>      
                  </h3>
                   <p class="font-medium text-base text-slate-500
                   mb-4">Lorem ipsum dolor sit amet consectetur
                   adipisicing elit. Vitae, numquam!</p>
                   <a href="#" class="font-medium text-sm text-white bg-teal-500 py-2 px-4 rounded-lg hover:opacity-80 mb-6" >Baca Selengkapnya</a>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
    <section  id="kontak" class="pt-36 pb-32">
      <div class="container">
        <div class="w-full px-4">
          <div class="max-w-xl mx-auto text-center mb-16">
            <h4 class="font-semibold text-lg text-teal-500 mb-2">Contack</h4>
            <h2 class="font-bold text-slate-900 text-3xl mb-4  sm:text-4xl
            lg:text-5xl">Hubungi Saya</h2>
            <p class="font-medium text-md text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
               pariatur velit aliquid nisi iusto excepturi?
          </p>
          </div>
        </div>   
          <form>
            <div class="w-full lg:w-2/3 lg:mx-auto">    
            <div class="w-full px-4 mb-8">
              <label for="name" class="text-base font-bold
              text-teal-500">Nama</label>
              <input type="text" id="name" class="w-full bg-slate-200
              text-slate-900 p-3 rounded-md focus:outline-none
              focus:ring-teal-500 focus:ring-1 focus:border-teal-500">
            </div>
            <div class="w-full px-4 mb-8">
              <label for="email" class="text-base font-bold
              text-teal-500">Email</label>
              <input type="email" id="email" class="w-full bg-slate-200
              text-slate-900 p-3 rounded-md focus:outline-none
              focus:ring-teal-500 focus:ring-1 focus:border-teal-500">
            </div>
            <div class="w-full px-4 mb-8">
              <label for="pesan" class="text-base font-bold
              text-teal-500">Pesan</label>
              <textarea type="text" id="name" class="w-full bg-slate-200
              text-slate-900 p-3 rounded-md focus:outline-none
              focus:ring-teal-500 focus:ring-1 focus:border-teal-500
              h-32"> </textarea>
            </div>
            <div class="w-full px-4">
              <button class="text-base font-semibold text-white
              bg-teal-500 py-3 px-8 rounded-full w-full hover:opacity-80
              hover:shadow-lg transition duration-500 ">Kirim</button>
            </div>
          </div>
          </form>
      </div>
    </section>
    <footer class="bg-slate-900 pt-24 pb-12">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full px-4 mb-1 text-slate-300 font-medium
          md:w-1/3">
            <h3 class="font-bold text-2xl mb-2 text-white">Hubungi Saya</h3>
            <p>alvintop11@gmail.com</p>
            <p>Jalan Pangeran Diponegoro No 74 Trenggalek Sumbergedong</p>
            <p>Trenggalek</p>                
          </div>
           <div class="w-full px-4 mb-12 md:w-1/3">
            <h3 class="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
            <ul class="text-slate-300">
              <li>
                <a href="" class="inline-block
                hover:text-teal-500 text-base mb-3">Programming</a>
              </li>
              <li>
                <a href="" class="inline-block
                hover:text-teal-500 text-base mb-3">Gaya Hidup</a>
              </li>
              <li>
                <a href="" class="inline-block
                hover:text-teal-500 text-base mb-3">Hobi</a>
              </li>
            </ul>
        </div>
        <div class="w-full px-4 mb-12 md:w-1/3">
          <h3 class="font-semibold text-xl text-white mb-5">Tautan</h3>
          <ul class="text-slate-300">
            <li>
              <a href="#home" class="inline-block
              hover:text-teal-500 text-base mb-3">Beranda</a>
            </li>
            <li>
              <a href="#about" class="inline-block
              hover:text-teal-500 text-base mb-3">About</a>
            </li>
            <li>
              <a href="#projek" class="inline-block
              hover:text-teal-500 text-base mb-3">Projek</a>
            </li>
            <li>
              <a href="#pendidikan" class="inline-block
              hover:text-teal-500 text-base mb-3">Pendidikan</a>
            </li>
            <li>
              <a href="#blog" class="inline-block
              hover:text-teal-500 text-base mb-3">Blog</a>
            </li>
            <li>
              <a href="#kontak" class="inline-block
              hover:text-teal-500 text-base mb-3">Contack</a>
            </li>
          </ul>
      </div>
        </div>
        <div class="w-full pt-10 border-t border-slate-700">
          <div class="flex items-center justify-center mb-5">
            <!--youtube-->
            <a href="https://youtube.com" target="_blank" class="w-9 h-9 mr-3 rounded-full
            flex justify-center items-center  text-slate-300
            hover:border-green-400 hover:bg-green-400  hover:text-white">
              <svg role="img" width="50" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube Gaming</title><path d="M24 13.2v-6l-6-3.6-6 3.6-6-3.6-6 3.6v6l12 7.2zM8.4 10.8H6v2.4H4.8v-2.4H2.4V9.6h2.4V7.2H6v2.4h2.4zm7.2 2.4a1.2 1.2 0 01-1.2-1.2c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm3.6-2.4A1.2 1.2 0 0118 9.6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2Z"/></svg>
            </a>
             <!--instagram-->
             <a href="https://www.instagram.com/alvinn_t.ahmd/" target="_blank" class="w-9 h-9 mr-3 rounded-full
             flex justify-center items-center  text-slate-300
             hover:border-green-400 hover:bg-green-400 hover:text-white">
             <svg role="img" widht="50" class="fill-current"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
             </a>
              <!--Tiktok-->
              <a href="https://www.tiktok.com/@alvn_t.ahmd" target="_blank" class="w-9 h-9 mr-3 rounded-full
              flex justify-center items-center  text-slate-300
              hover:border-green-400 hover:bg-green-400  hover:text-white">
              <svg role="img" widht="50" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
               <!--Tiktok-->
               <a href="https:facebook.com" target="_blank" class="w-9 h-9 mr-3 rounded-full
               flex justify-center items-center  text-slate-300
               hover:border-green-400 hover:bg-green-400  hover:text-white">
               <svg role="img" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
               </a>
               <!--whatsapp-->
               <a href="https://wa.me/628884845979" target="_blank" class="w-9 h-9 mr-3 rounded-full
               flex justify-center items-center  text-slate-300
               hover:border-green-400 hover:bg-green-400  hover:text-white">
               <svg role="img" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
               </a>
          </div>
          <p class="font-medium  text-slate-400
          text-center">Dibuat Oleh <a href="https://www.instagram.com/alvinn_t.ahmd/" target="blank" class="font-bold text-teal-500">Alvin</a> Menggunakan <a href="https://tailwindscss.com" target="blank" class="font-bold text-sky-500">Tailwind CSS</a> 
         </p>
         <div class="w-10 h-10 bg-sky-300 rounded-full flex fixed bottom-5 right-5 cursor-pointer"><a href="#" class="text-xl m-auto">🔝</a></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
</script>
