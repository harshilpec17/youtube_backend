import React, { use, useEffect } from "react";
import { useSelector } from "react-redux";
import { timeAgoFormat } from "../../utils/timeAgo";
import axios from "axios";
import { useState } from "react";

const VideoDetailPage = () => {
  const { video } = useSelector((state) => state.video);

  const [channelData, setChannelData] = useState(null);

  const userName = video.owner.userName;

  const getChannelStatus = async (userName) => {
    try {
      const resposne = await axios.get(`/url/c/${userName}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      });

      if (resposne.status === 200) {
        setChannelData(resposne);
      }
    } catch (error) {
      console.error("Error fetching channel data:", error);
    }
  };

  useEffect(() => {
    getChannelStatus(userName);
  }, [userName]);

  return (
    <>
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/18094275/pexels-photo-18094275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/7775637/pexels-photo-7775637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1739854/pexels-photo-1739854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144256/pexels-photo-1144256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144260/pexels-photo-1144260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144276/pexels-photo-1144276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144274/pexels-photo-1144274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144231/pexels-photo-1144231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144250/pexels-photo-1144250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1115824/pexels-photo-1115824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1115808/pexels-photo-1115808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div class="h-screen overflow-y-auto bg-[#121212] text-white">
        <header class="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
          <nav class="mx-auto flex max-w-7xl items-center py-2">
            <div class="mr-4 w-12 shrink-0 sm:w-16">
              <svg
                style={{ width: "100%" }}
                viewBox="0 0 63 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z"
                  stroke="#E9FCFF"
                  strokeWidth="1.38962"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z"
                  stroke="url(#paint0_linear_53_10115)"
                  strokeWidth="6.99574"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M18.1915 27.6963C20.1641 27.6963 21.7285 28.7066 21.7285 30.9021C21.7285 33.0976 20.1621 34.2433 18.1915 34.2433H16.8854V37.8677H14.1733V27.6984H18.1915V27.6963Z"
                  fill="#E9FCFF"
                ></path>
                <path
                  d="M25.2053 27.6963V35.4868H28.484V37.8657H22.4932V27.6963H25.2053Z"
                  fill="#E9FCFF"
                ></path>
                <path
                  d="M35.3142 27.6963L39.4553 37.8657H36.5328L35.9162 36.1763H32.1939L31.5773 37.8657H28.6548L32.7959 27.6963H35.3101H35.3142ZM34.9143 33.5663L34.2144 31.7832C34.1582 31.6395 33.954 31.6395 33.8978 31.7832L33.1979 33.5663C33.1541 33.6767 33.2354 33.7975 33.3562 33.7975H34.756C34.8747 33.7975 34.958 33.6767 34.9143 33.5663Z"
                  fill="#E9FCFF"
                ></path>
                <path
                  d="M40.9491 27.6963L42.8592 30.5188L44.7694 27.6963H48.0355L44.2132 33.2559V37.8657H41.5011V33.2559L37.6787 27.6963H40.9449H40.9491Z"
                  fill="#E9FCFF"
                ></path>
                <path
                  d="M16.894 32.1396V29.9129C16.894 29.8212 16.9982 29.7671 17.0732 29.8191L18.6771 30.9315C18.7417 30.9773 18.7417 31.0731 18.6771 31.1189L17.0732 32.2313C16.9982 32.2834 16.894 32.2313 16.894 32.1375V32.1396Z"
                  fill="#232323"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_53_10115"
                    x1="2.23416"
                    y1="20.3361"
                    x2="26.863"
                    y2="44.9649"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#007EF8"></stop>
                    <stop offset="1" stopColor="#FF4A9A"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
              <input
                class="w-full border bg-transparent py-1 pl-8 pr-3 placeholder-white outline-none sm:py-2"
                placeholder="Search"
              />
              <span class="absolute left-2.5 top-1/2 inline-block -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
              </span>
            </div>
            <button class="ml-auto sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </button>
            <button class="group peer ml-4 flex w-6 shrink-0 flex-wrap gap-y-1.5 sm:hidden">
              <span class="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
              <span class="block h-[2px] w-2/3 bg-white group-hover:bg-[#ae7aff]"></span>
              <span class="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
            </button>
            <div class="fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col border-l border-white bg-[#121212] duration-200 hover:translate-x-0 peer-focus:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 sm:border-none">
              <div class="relative flex w-full items-center justify-between border-b border-white px-4 py-2 sm:hidden">
                <span class="inline-block w-12">
                  <svg
                    style={{ width: "100%" }}
                    viewBox="0 0 63 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z"
                      stroke="#E9FCFF"
                      strokeWidth="1.38962"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z"
                      stroke="url(#paint0_linear_53_10115)"
                      strokeWidth="6.99574"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M18.1915 27.6963C20.1641 27.6963 21.7285 28.7066 21.7285 30.9021C21.7285 33.0976 20.1621 34.2433 18.1915 34.2433H16.8854V37.8677H14.1733V27.6984H18.1915V27.6963Z"
                      fill="#E9FCFF"
                    ></path>
                    <path
                      d="M25.2053 27.6963V35.4868H28.484V37.8657H22.4932V27.6963H25.2053Z"
                      fill="#E9FCFF"
                    ></path>
                    <path
                      d="M35.3142 27.6963L39.4553 37.8657H36.5328L35.9162 36.1763H32.1939L31.5773 37.8657H28.6548L32.7959 27.6963H35.3101H35.3142ZM34.9143 33.5663L34.2144 31.7832C34.1582 31.6395 33.954 31.6395 33.8978 31.7832L33.1979 33.5663C33.1541 33.6767 33.2354 33.7975 33.3562 33.7975H34.756C34.8747 33.7975 34.958 33.6767 34.9143 33.5663Z"
                      fill="#E9FCFF"
                    ></path>
                    <path
                      d="M40.9491 27.6963L42.8592 30.5188L44.7694 27.6963H48.0355L44.2132 33.2559V37.8657H41.5011V33.2559L37.6787 27.6963H40.9449H40.9491Z"
                      fill="#E9FCFF"
                    ></path>
                    <path
                      d="M16.894 32.1396V29.9129C16.894 29.8212 16.9982 29.7671 17.0732 29.8191L18.6771 30.9315C18.7417 30.9773 18.7417 31.0731 18.6771 31.1189L17.0732 32.2313C16.9982 32.2834 16.894 32.2313 16.894 32.1375V32.1396Z"
                      fill="#232323"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_53_10115"
                        x1="2.23416"
                        y1="20.3361"
                        x2="26.863"
                        y2="44.9649"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#007EF8"></stop>
                        <stop offset="1" stopColor="#FF4A9A"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <button class="inline-block w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul class="my-4 flex w-full flex-wrap gap-2 px-4 sm:hidden">
                <li class="w-full">
                  <button class="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                    <span class="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        style={{ width: "100%" }}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 21V10M1 12V19C1 20.1046 1.89543 21 3 21H16.4262C17.907 21 19.1662 19.9197 19.3914 18.4562L20.4683 11.4562C20.7479 9.6389 19.3418 8 17.5032 8H14C13.4477 8 13 7.55228 13 7V3.46584C13 2.10399 11.896 1 10.5342 1C10.2093 1 9.91498 1.1913 9.78306 1.48812L6.26394 9.40614C6.10344 9.76727 5.74532 10 5.35013 10H3C1.89543 10 1 10.8954 1 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span>Liked Videos</span>
                  </button>
                </li>
                <li class="w-full">
                  <button class="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                    <span class="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        style={{ width: "100%" }}
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 4.93137C21 4.32555 21 4.02265 20.8802 3.88238C20.7763 3.76068 20.6203 3.69609 20.4608 3.70865C20.2769 3.72312 20.0627 3.93731 19.6343 4.36569L16 8L19.6343 11.6343C20.0627 12.0627 20.2769 12.2769 20.4608 12.2914C20.6203 12.3039 20.7763 12.2393 20.8802 12.1176C21 11.9774 21 11.6744 21 11.0686V4.93137Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H11.2C12.8802 1 13.7202 1 14.362 1.32698C14.9265 1.6146 15.3854 2.07354 15.673 2.63803C16 3.27976 16 4.11984 16 5.8V10.2C16 11.8802 16 12.7202 15.673 13.362C15.3854 13.9265 14.9265 14.3854 14.362 14.673C13.7202 15 12.8802 15 11.2 15H5.8C4.11984 15 3.27976 15 2.63803 14.673C2.07354 14.3854 1.6146 13.9265 1.32698 13.362C1 12.7202 1 11.8802 1 10.2V5.8Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span>My Content</span>
                  </button>
                </li>
                <li class="w-full">
                  <button class="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                    <span class="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        style={{ width: "100%" }}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.09 8C8.3251 7.33167 8.78915 6.76811 9.39995 6.40913C10.0108 6.05016 10.7289 5.91894 11.4272 6.03871C12.1255 6.15849 12.7588 6.52152 13.2151 7.06353C13.6713 7.60553 13.9211 8.29152 13.92 9C13.92 11 10.92 12 10.92 12M11 16H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span>Support</span>
                  </button>
                </li>
                <li class="w-full">
                  <button class="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                    <span class="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        style={{ width: "100%" }}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.7273 13.7273C17.6063 14.0015 17.5702 14.3056 17.6236 14.6005C17.6771 14.8954 17.8177 15.1676 18.0273 15.3818L18.0818 15.4364C18.2509 15.6052 18.385 15.8057 18.4765 16.0265C18.568 16.2472 18.6151 16.4838 18.6151 16.7227C18.6151 16.9617 18.568 17.1983 18.4765 17.419C18.385 17.6397 18.2509 17.8402 18.0818 18.0091C17.913 18.1781 17.7124 18.3122 17.4917 18.4037C17.271 18.4952 17.0344 18.5423 16.7955 18.5423C16.5565 18.5423 16.3199 18.4952 16.0992 18.4037C15.8785 18.3122 15.678 18.1781 15.5091 18.0091L15.4545 17.9545C15.2403 17.745 14.9682 17.6044 14.6733 17.5509C14.3784 17.4974 14.0742 17.5335 13.8 17.6545C13.5311 17.7698 13.3018 17.9611 13.1403 18.205C12.9788 18.4489 12.8921 18.7347 12.8909 19.0273V19.1818C12.8909 19.664 12.6994 20.1265 12.3584 20.4675C12.0174 20.8084 11.5549 21 11.0727 21C10.5905 21 10.1281 20.8084 9.78708 20.4675C9.4461 20.1265 9.25455 19.664 9.25455 19.1818V19.1C9.24751 18.7991 9.15011 18.5073 8.97501 18.2625C8.79991 18.0176 8.55521 17.8312 8.27273 17.7273C7.99853 17.6063 7.69437 17.5702 7.39947 17.6236C7.10456 17.6771 6.83244 17.8177 6.61818 18.0273L6.56364 18.0818C6.39478 18.2509 6.19425 18.385 5.97353 18.4765C5.7528 18.568 5.51621 18.6151 5.27727 18.6151C5.03834 18.6151 4.80174 18.568 4.58102 18.4765C4.36029 18.385 4.15977 18.2509 3.99091 18.0818C3.82186 17.913 3.68775 17.7124 3.59626 17.4917C3.50476 17.271 3.45766 17.0344 3.45766 16.7955C3.45766 16.5565 3.50476 16.3199 3.59626 16.0992C3.68775 15.8785 3.82186 15.678 3.99091 15.5091L4.04545 15.4545C4.25503 15.2403 4.39562 14.9682 4.4491 14.6733C4.50257 14.3784 4.46647 14.0742 4.34545 13.8C4.23022 13.5311 4.03887 13.3018 3.79497 13.1403C3.55107 12.9788 3.26526 12.8921 2.97273 12.8909H2.81818C2.33597 12.8909 1.87351 12.6994 1.53253 12.3584C1.19156 12.0174 1 11.5549 1 11.0727C1 10.5905 1.19156 10.1281 1.53253 9.78708C1.87351 9.4461 2.33597 9.25455 2.81818 9.25455H2.9C3.2009 9.24751 3.49273 9.15011 3.73754 8.97501C3.98236 8.79991 4.16883 8.55521 4.27273 8.27273C4.39374 7.99853 4.42984 7.69437 4.37637 7.39947C4.3229 7.10456 4.18231 6.83244 3.97273 6.61818L3.91818 6.56364C3.74913 6.39478 3.61503 6.19425 3.52353 5.97353C3.43203 5.7528 3.38493 5.51621 3.38493 5.27727C3.38493 5.03834 3.43203 4.80174 3.52353 4.58102C3.61503 4.36029 3.74913 4.15977 3.91818 3.99091C4.08704 3.82186 4.28757 3.68775 4.50829 3.59626C4.72901 3.50476 4.96561 3.45766 5.20455 3.45766C5.44348 3.45766 5.68008 3.50476 5.9008 3.59626C6.12152 3.68775 6.32205 3.82186 6.49091 3.99091L6.54545 4.04545C6.75971 4.25503 7.03183 4.39562 7.32674 4.4491C7.62164 4.50257 7.9258 4.46647 8.2 4.34545H8.27273C8.54161 4.23022 8.77093 4.03887 8.93245 3.79497C9.09397 3.55107 9.18065 3.26526 9.18182 2.97273V2.81818C9.18182 2.33597 9.37338 1.87351 9.71435 1.53253C10.0553 1.19156 10.5178 1 11 1C11.4822 1 11.9447 1.19156 12.2856 1.53253C12.6266 1.87351 12.8182 2.33597 12.8182 2.81818V2.9C12.8193 3.19253 12.906 3.47834 13.0676 3.72224C13.2291 3.96614 13.4584 4.15749 13.7273 4.27273C14.0015 4.39374 14.3056 4.42984 14.6005 4.37637C14.8954 4.3229 15.1676 4.18231 15.3818 3.97273L15.4364 3.91818C15.6052 3.74913 15.8057 3.61503 16.0265 3.52353C16.2472 3.43203 16.4838 3.38493 16.7227 3.38493C16.9617 3.38493 17.1983 3.43203 17.419 3.52353C17.6397 3.61503 17.8402 3.74913 18.0091 3.91818C18.1781 4.08704 18.3122 4.28757 18.4037 4.50829C18.4952 4.72901 18.5423 4.96561 18.5423 5.20455C18.5423 5.44348 18.4952 5.68008 18.4037 5.9008C18.3122 6.12152 18.1781 6.32205 18.0091 6.49091L17.9545 6.54545C17.745 6.75971 17.6044 7.03183 17.5509 7.32674C17.4974 7.62164 17.5335 7.9258 17.6545 8.2V8.27273C17.7698 8.54161 17.9611 8.77093 18.205 8.93245C18.4489 9.09397 18.7347 9.18065 19.0273 9.18182H19.1818C19.664 9.18182 20.1265 9.37338 20.4675 9.71435C20.8084 10.0553 21 10.5178 21 11C21 11.4822 20.8084 11.9447 20.4675 12.2856C20.1265 12.6266 19.664 12.8182 19.1818 12.8182H19.1C18.8075 12.8193 18.5217 12.906 18.2778 13.0676C18.0339 13.2291 17.8425 13.4584 17.7273 13.7273Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
              <div class="mb-8 mt-auto flex w-full flex-wrap gap-4 px-4 sm:mb-0 sm:mt-0 sm:items-center sm:px-0">
                <button class="w-full bg-[#383737] px-3 py-2 hover:bg-[#4f4e4e] sm:w-auto sm:bg-transparent">
                  Log in
                </button>
                <button class="mr-1 w-full bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                  Sign up
                </button>
              </div>
            </div>
          </nav>
        </header>
        <div class="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <aside class="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px]">
            <ul class="flex justify-around gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">
              <li class="">
                <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                  <span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      style={{ width: "100%" }}
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 15.9997H14M9.0177 1.76375L2.23539 7.03888C1.78202 7.3915 1.55534 7.56781 1.39203 7.78861C1.24737 7.9842 1.1396 8.20454 1.07403 8.43881C1 8.70327 1 8.99045 1 9.56481V16.7997C1 17.9198 1 18.4799 1.21799 18.9077C1.40973 19.284 1.71569 19.59 2.09202 19.7818C2.51984 19.9997 3.07989 19.9997 4.2 19.9997H15.8C16.9201 19.9997 17.4802 19.9997 17.908 19.7818C18.2843 19.59 18.5903 19.284 18.782 18.9077C19 18.4799 19 17.9198 19 16.7997V9.56481C19 8.99045 19 8.70327 18.926 8.43881C18.8604 8.20454 18.7526 7.9842 18.608 7.78861C18.4447 7.56781 18.218 7.3915 17.7646 7.03888L10.9823 1.76376C10.631 1.4905 10.4553 1.35388 10.2613 1.30136C10.0902 1.25502 9.9098 1.25502 9.73865 1.30136C9.54468 1.35388 9.36902 1.4905 9.0177 1.76375Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span class="block sm:hidden sm:group-hover:inline">
                    Home
                  </span>
                </button>
              </li>
              <li class="hidden sm:block">
                <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                  <span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      style={{ width: "100%" }}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 21V10M1 12V19C1 20.1046 1.89543 21 3 21H16.4262C17.907 21 19.1662 19.9197 19.3914 18.4562L20.4683 11.4562C20.7479 9.6389 19.3418 8 17.5032 8H14C13.4477 8 13 7.55228 13 7V3.46584C13 2.10399 11.896 1 10.5342 1C10.2093 1 9.91498 1.1913 9.78306 1.48812L6.26394 9.40614C6.10344 9.76727 5.74532 10 5.35013 10H3C1.89543 10 1 10.8954 1 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span class="block sm:hidden sm:group-hover:inline">
                    Liked Videos
                  </span>
                </button>
              </li>
              <li class="">
                <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                  <span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      style={{ width: "100%" }}
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.7 11.5L18.7005 9.5L16.7 11.5M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C13.3019 1 16.1885 2.77814 17.7545 5.42909M10 5V10L13 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span class="block sm:hidden sm:group-hover:inline">
                    History
                  </span>
                </button>
              </li>
              <li class="hidden sm:block">
                <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                  <span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      style={{ width: "100%" }}
                      viewBox="0 0 22 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 4.93137C21 4.32555 21 4.02265 20.8802 3.88238C20.7763 3.76068 20.6203 3.69609 20.4608 3.70865C20.2769 3.72312 20.0627 3.93731 19.6343 4.36569L16 8L19.6343 11.6343C20.0627 12.0627 20.2769 12.2769 20.4608 12.2914C20.6203 12.3039 20.7763 12.2393 20.8802 12.1176C21 11.9774 21 11.6744 21 11.0686V4.93137Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H11.2C12.8802 1 13.7202 1 14.362 1.32698C14.9265 1.6146 15.3854 2.07354 15.673 2.63803C16 3.27976 16 4.11984 16 5.8V10.2C16 11.8802 16 12.7202 15.673 13.362C15.3854 13.9265 14.9265 14.3854 14.362 14.673C13.7202 15 12.8802 15 11.2 15H5.8C4.11984 15 3.27976 15 2.63803 14.673C2.07354 14.3854 1.6146 13.9265 1.32698 13.362C1 12.7202 1 11.8802 1 10.2V5.8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span class="block sm:hidden sm:group-hover:inline">
                    My Content
                  </span>
                </button>
              </li>
              <li class="">
                <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                  <span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      style={{ width: "100%" }}
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5L10.8845 2.76892C10.5634 2.1268 10.4029 1.80573 10.1634 1.57116C9.95158 1.36373 9.69632 1.20597 9.41607 1.10931C9.09916 1 8.74021 1 8.02229 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V5M1 5H16.2C17.8802 5 18.7202 5 19.362 5.32698C19.9265 5.6146 20.3854 6.07354 20.673 6.63803C21 7.27976 21 8.11984 21 9.8V14.2C21 15.8802 21 16.7202 20.673 17.362C20.3854 17.9265 19.9265 18.3854 19.362 18.673C18.7202 19 17.8802 19 16.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span class="block sm:hidden sm:group-hover:inline">
                    Collections
                  </span>
                </button>
              </li>
              <li class="">
                <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                  <span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      style={{ width: "100%" }}
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 13.5H6.5C5.10444 13.5 4.40665 13.5 3.83886 13.6722C2.56045 14.06 1.56004 15.0605 1.17224 16.3389C1 16.9067 1 17.6044 1 19M15 16L17 18L21 14M13.5 5.5C13.5 7.98528 11.4853 10 9 10C6.51472 10 4.5 7.98528 4.5 5.5C4.5 3.01472 6.51472 1 9 1C11.4853 1 13.5 3.01472 13.5 5.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span class="block sm:hidden sm:group-hover:inline">
                    Subscribers
                  </span>
                </button>
              </li>
              <li class="hidden sm:block mt-auto">
                <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                  <span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      style={{ width: "100%" }}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.09 8C8.3251 7.33167 8.78915 6.76811 9.39995 6.40913C10.0108 6.05016 10.7289 5.91894 11.4272 6.03871C12.1255 6.15849 12.7588 6.52152 13.2151 7.06353C13.6713 7.60553 13.9211 8.29152 13.92 9C13.92 11 10.92 12 10.92 12M11 16H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span class="block sm:hidden sm:group-hover:inline">
                    Support
                  </span>
                </button>
              </li>
              <li class="hidden sm:block">
                <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                  <span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      style={{ width: "100%" }}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M17.7273 13.7273C17.6063 14.0015 17.5702 14.3056 17.6236 14.6005C17.6771 14.8954 17.8177 15.1676 18.0273 15.3818L18.0818 15.4364C18.2509 15.6052 18.385 15.8057 18.4765 16.0265C18.568 16.2472 18.6151 16.4838 18.6151 16.7227C18.6151 16.9617 18.568 17.1983 18.4765 17.419C18.385 17.6397 18.2509 17.8402 18.0818 18.0091C17.913 18.1781 17.7124 18.3122 17.4917 18.4037C17.271 18.4952 17.0344 18.5423 16.7955 18.5423C16.5565 18.5423 16.3199 18.4952 16.0992 18.4037C15.8785 18.3122 15.678 18.1781 15.5091 18.0091L15.4545 17.9545C15.2403 17.745 14.9682 17.6044 14.6733 17.5509C14.3784 17.4974 14.0742 17.5335 13.8 17.6545C13.5311 17.7698 13.3018 17.9611 13.1403 18.205C12.9788 18.4489 12.8921 18.7347 12.8909 19.0273V19.1818C12.8909 19.664 12.6994 20.1265 12.3584 20.4675C12.0174 20.8084 11.5549 21 11.0727 21C10.5905 21 10.1281 20.8084 9.78708 20.4675C9.4461 20.1265 9.25455 19.664 9.25455 19.1818V19.1C9.24751 18.7991 9.15011 18.5073 8.97501 18.2625C8.79991 18.0176 8.55521 17.8312 8.27273 17.7273C7.99853 17.6063 7.69437 17.5702 7.39947 17.6236C7.10456 17.6771 6.83244 17.8177 6.61818 18.0273L6.56364 18.0818C6.39478 18.2509 6.19425 18.385 5.97353 18.4765C5.7528 18.568 5.51621 18.6151 5.27727 18.6151C5.03834 18.6151 4.80174 18.568 4.58102 18.4765C4.36029 18.385 4.15977 18.2509 3.99091 18.0818C3.82186 17.913 3.68775 17.7124 3.59626 17.4917C3.50476 17.271 3.45766 17.0344 3.45766 16.7955C3.45766 16.5565 3.50476 16.3199 3.59626 16.0992C3.68775 15.8785 3.82186 15.678 3.99091 15.5091L4.04545 15.4545C4.25503 15.2403 4.39562 14.9682 4.4491 14.6733C4.50257 14.3784 4.46647 14.0742 4.34545 13.8C4.23022 13.5311 4.03887 13.3018 3.79497 13.1403C3.55107 12.9788 3.26526 12.8921 2.97273 12.8909H2.81818C2.33597 12.8909 1.87351 12.6994 1.53253 12.3584C1.19156 12.0174 1 11.5549 1 11.0727C1 10.5905 1.19156 10.1281 1.53253 9.78708C1.87351 9.4461 2.33597 9.25455 2.81818 9.25455H2.9C3.2009 9.24751 3.49273 9.15011 3.73754 8.97501C3.98236 8.79991 4.16883 8.55521 4.27273 8.27273C4.39374 7.99853 4.42984 7.69437 4.37637 7.39947C4.3229 7.10456 4.18231 6.83244 3.97273 6.61818L3.91818 6.56364C3.74913 6.39478 3.61503 6.19425 3.52353 5.97353C3.43203 5.7528 3.38493 5.51621 3.38493 5.27727C3.38493 5.03834 3.43203 4.80174 3.52353 4.58102C3.61503 4.36029 3.74913 4.15977 3.91818 3.99091C4.08704 3.82186 4.28757 3.68775 4.50829 3.59626C4.72901 3.50476 4.96561 3.45766 5.20455 3.45766C5.44348 3.45766 5.68008 3.50476 5.9008 3.59626C6.12152 3.68775 6.32205 3.82186 6.49091 3.99091L6.54545 4.04545C6.75971 4.25503 7.03183 4.39562 7.32674 4.4491C7.62164 4.50257 7.9258 4.46647 8.2 4.34545H8.27273C8.54161 4.23022 8.77093 4.03887 8.93245 3.79497C9.09397 3.55107 9.18065 3.26526 9.18182 2.97273V2.81818C9.18182 2.33597 9.37338 1.87351 9.71435 1.53253C10.0553 1.19156 10.5178 1 11 1C11.4822 1 11.9447 1.19156 12.2856 1.53253C12.6266 1.87351 12.8182 2.33597 12.8182 2.81818V2.9C12.8193 3.19253 12.906 3.47834 13.0676 3.72224C13.2291 3.96614 13.4584 4.15749 13.7273 4.27273C14.0015 4.39374 14.3056 4.42984 14.6005 4.37637C14.8954 4.3229 15.1676 4.18231 15.3818 3.97273L15.4364 3.91818C15.6052 3.74913 15.8057 3.61503 16.0265 3.52353C16.2472 3.43203 16.4838 3.38493 16.7227 3.38493C16.9617 3.38493 17.1983 3.43203 17.419 3.52353C17.6397 3.61503 17.8402 3.74913 18.0091 3.91818C18.1781 4.08704 18.3122 4.28757 18.4037 4.50829C18.4952 4.72901 18.5423 4.96561 18.5423 5.20455C18.5423 5.44348 18.4952 5.68008 18.4037 5.9008C18.3122 6.12152 18.1781 6.32205 18.0091 6.49091L17.9545 6.54545C17.745 6.75971 17.6044 7.03183 17.5509 7.32674C17.4974 7.62164 17.5335 7.9258 17.6545 8.2V8.27273C17.7698 8.54161 17.9611 8.77093 18.205 8.93245C18.4489 9.09397 18.7347 9.18065 19.0273 9.18182H19.1818C19.664 9.18182 20.1265 9.37338 20.4675 9.71435C20.8084 10.0553 21 10.5178 21 11C21 11.4822 20.8084 11.9447 20.4675 12.2856C20.1265 12.6266 19.664 12.8182 19.1818 12.8182H19.1C18.8075 12.8193 18.5217 12.906 18.2778 13.0676C18.0339 13.2291 17.8425 13.4584 17.7273 13.7273Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span class="block sm:hidden sm:group-hover:inline">
                    Settings
                  </span>
                </button>
              </li>
            </ul>
          </aside>
          <section class="w-full pb-[70px] sm:ml-[70px] sm:pb-0">
            <div class="flex w-full flex-wrap gap-4 p-4 lg:flex-nowrap">
              <div class="col-span-12 w-full">
                <div class="relative mb-4 w-full pt-[56%]">
                  <div class="absolute inset-0">
                    <video class="h-full w-full" controls autoplay muted>
                      <source src={video.videoFile} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div
                  class="group mb-4 w-full rounded-lg border p-4 duration-200 hover:bg-white/5 focus:bg-white/5"
                  role="button"
                  tabindex="0"
                >
                  <div class="flex flex-wrap gap-y-2">
                    <div class="w-full md:w-1/2 lg:w-full xl:w-1/2">
                      <h1 class="text-lg font-bold">{video.title}</h1>
                      <p class="flex text-sm text-gray-200">
                        {video.views} Views · {timeAgoFormat(video.createdAt)}{" "}
                      </p>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-full xl:w-1/2">
                      <div class="flex items-center justify-between gap-x-4 md:justify-end lg:justify-between xl:justify-end">
                        <div class="flex overflow-hidden rounded-lg border">
                          <button
                            class="group/btn flex items-center gap-x-2 border-r border-gray-700 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                            data-like="3050"
                            data-like-alt="3051"
                          >
                            <span class="inline-block w-5 group-focus/btn:text-[#ae7aff]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  stroke-linejoin="round"
                                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            class="group/btn flex items-center gap-x-2 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                            data-like="20"
                            data-like-alt="21"
                          >
                            <span class="inline-block w-5 group-focus/btn:text-[#ae7aff]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  stroke-linejoin="round"
                                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div class="relative block">
                          <button class="peer flex items-center gap-x-2 rounded-lg bg-white px-4 py-1.5 text-black">
                            <span class="inline-block w-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  stroke-linejoin="round"
                                  d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                                ></path>
                              </svg>
                            </span>
                            Save
                          </button>
                          <div class="absolute right-0 top-full z-10 hidden w-64 overflow-hidden rounded-lg bg-[#121212] p-4 shadow shadow-slate-50/30 hover:block peer-focus:block">
                            <h3 class="mb-4 text-center text-lg font-semibold">
                              Save to playlist
                            </h3>
                            <ul class="mb-4">
                              <li class="mb-2 last:mb-0">
                                <label
                                  class="group/label inline-flex cursor-pointer items-center gap-x-3"
                                  for="Collections-checkbox"
                                >
                                  <input
                                    type="checkbox"
                                    class="peer hidden"
                                    id="Collections-checkbox"
                                  />
                                  <span class="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="3"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                      ></path>
                                    </svg>
                                  </span>
                                  Collections
                                </label>
                              </li>
                              <li class="mb-2 last:mb-0">
                                <label
                                  class="group/label inline-flex cursor-pointer items-center gap-x-3"
                                  for="JavaScript Basics-checkbox"
                                >
                                  <input
                                    type="checkbox"
                                    class="peer hidden"
                                    id="JavaScript Basics-checkbox"
                                  />
                                  <span class="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="3"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                      ></path>
                                    </svg>
                                  </span>
                                  JavaScript Basics
                                </label>
                              </li>
                              <li class="mb-2 last:mb-0">
                                <label
                                  class="group/label inline-flex cursor-pointer items-center gap-x-3"
                                  for="C++ Tuts-checkbox"
                                >
                                  <input
                                    type="checkbox"
                                    class="peer hidden"
                                    id="C++ Tuts-checkbox"
                                  />
                                  <span class="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="3"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                      ></path>
                                    </svg>
                                  </span>
                                  C++ Tuts
                                </label>
                              </li>
                              <li class="mb-2 last:mb-0">
                                <label
                                  class="group/label inline-flex cursor-pointer items-center gap-x-3"
                                  for="Feel Good Music-checkbox"
                                >
                                  <input
                                    type="checkbox"
                                    class="peer hidden"
                                    id="Feel Good Music-checkbox"
                                  />
                                  <span class="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="3"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                      ></path>
                                    </svg>
                                  </span>
                                  Feel Good Music
                                </label>
                              </li>
                              <li class="mb-2 last:mb-0">
                                <label
                                  class="group/label inline-flex cursor-pointer items-center gap-x-3"
                                  for="Ed Sheeran-checkbox"
                                >
                                  <input
                                    type="checkbox"
                                    class="peer hidden"
                                    id="Ed Sheeran-checkbox"
                                  />
                                  <span class="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="3"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                      ></path>
                                    </svg>
                                  </span>
                                  Ed Sheeran
                                </label>
                              </li>
                              <li class="mb-2 last:mb-0">
                                <label
                                  class="group/label inline-flex cursor-pointer items-center gap-x-3"
                                  for="Python-checkbox"
                                >
                                  <input
                                    type="checkbox"
                                    class="peer hidden"
                                    id="Python-checkbox"
                                  />
                                  <span class="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="3"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                      ></path>
                                    </svg>
                                  </span>
                                  Python
                                </label>
                              </li>
                            </ul>
                            <div class="flex flex-col">
                              <label
                                for="playlist-name"
                                class="mb-1 inline-block cursor-pointer"
                              >
                                Name
                              </label>
                              <input
                                class="w-full rounded-lg border border-transparent bg-white px-3 py-2 text-black outline-none focus:border-[#ae7aff]"
                                id="playlist-name"
                                placeholder="Enter playlist name"
                              />
                              <button class="mx-auto mt-4 rounded-lg bg-[#ae7aff] px-4 py-2 text-black">
                                Create new playlist
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 flex items-center justify-between">
                    <div class="flex items-center gap-x-4">
                      <div class="mt-2 h-12 w-12 shrink-0">
                        <img
                          src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-w"
                          alt="reactpatterns"
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="block">
                        <p class="text-gray-200">React Patterns</p>
                        <p class="text-sm text-gray-400">757K Subscribers</p>
                      </div>
                    </div>
                    <div class="block">
                      <button class="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                        <span class="inline-block w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              stroke-linejoin="round"
                              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                            ></path>
                          </svg>
                        </span>
                        <span class="group-focus/btn:hidden">Subscribe</span>
                        <span class="hidden group-focus/btn:block">
                          Subscribed
                        </span>
                      </button>
                    </div>
                  </div>
                  <hr class="my-4 border-white" />
                  <div class="h-5 overflow-hidden group-focus:h-auto">
                    <p class="text-sm">{video.description}</p>
                  </div>
                </div>
                <button class="peer w-full rounded-lg border p-4 text-left duration-200 hover:bg-white/5 focus:bg-white/5 sm:hidden">
                  <h6 class="font-semibold">573 Comments...</h6>
                </button>
                <div class="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-[#121212] p-4 duration-200 hover:top-[67px] peer-focus:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
                  <div class="block">
                    <h6 class="mb-4 font-semibold">573 Comments</h6>
                    <input
                      type="text"
                      class="w-full rounded-lg border bg-transparent px-2 py-1 placeholder-white"
                      placeholder="Add a Comment"
                    />
                  </div>
                  <hr class="my-4 border-white" />
                  <div>
                    <div class="flex gap-x-4">
                      <div class="mt-2 h-11 w-11 shrink-0">
                        <img
                          src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="sarahjv"
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="block">
                        <p class="flex items-center text-gray-200">
                          Sarah Johnson · 
                          <span class="text-sm">17 hour ago</span>
                        </p>
                        <p class="text-sm text-gray-200">@sarahjv</p>
                        <p class="mt-3 text-sm">
                          This series is exactly what I&#x27;ve been looking
                          for! Excited to dive into these advanced React
                          patterns. Thanks for putting this together!
                        </p>
                      </div>
                    </div>
                    <hr class="my-4 border-white" />
                  </div>
                  <div>
                    <div class="flex gap-x-4">
                      <div class="mt-2 h-11 w-11 shrink-0">
                        <img
                          src="https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="mikerod"
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="block">
                        <p class="flex items-center text-gray-200">
                          Michael Rodriguez · 
                          <span class="text-sm">5 minutes ago</span>
                        </p>
                        <p class="text-sm text-gray-200">@mikerod</p>
                        <p class="mt-3 text-sm">
                          Render props have always been a bit tricky for me.
                          Can&#x27;t wait to see how this series breaks it down.
                          Thanks for sharing!
                        </p>
                      </div>
                    </div>
                    <hr class="my-4 border-white" />
                  </div>
                  <div>
                    <div class="flex gap-x-4">
                      <div class="mt-2 h-11 w-11 shrink-0">
                        <img
                          src="https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="emilyt"
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="block">
                        <p class="flex items-center text-gray-200">
                          Emily Turner · 
                          <span class="text-sm">1 hour ago</span>
                        </p>
                        <p class="text-sm text-gray-200">@emilyt</p>
                        <p class="mt-3 text-sm">
                          Higher-order components have been a mystery to me for
                          far too long. Looking forward to demystifying them
                          with this series. Thanks!
                        </p>
                      </div>
                    </div>
                    <hr class="my-4 border-white" />
                  </div>
                  <div>
                    <div class="flex gap-x-4">
                      <div class="mt-2 h-11 w-11 shrink-0">
                        <img
                          src="https://images.pexels.com/photos/18094275/pexels-photo-18094275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="davidc"
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="block">
                        <p class="flex items-center text-gray-200">
                          David Chen · 
                          <span class="text-sm">3 hour ago</span>
                        </p>
                        <p class="text-sm text-gray-200">@davidc</p>
                        <p class="mt-3 text-sm">
                          Compound components are a game-changer for UI
                          development. Can&#x27;t wait to learn more about them.
                          Great work on this series!
                        </p>
                      </div>
                    </div>
                    <hr class="my-4 border-white" />
                  </div>
                  <div>
                    <div class="flex gap-x-4">
                      <div class="mt-2 h-11 w-11 shrink-0">
                        <img
                          src="https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="alex_p"
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="block">
                        <p class="flex items-center text-gray-200">
                          Alex Parker · 
                          <span class="text-sm">12 hour ago</span>
                        </p>
                        <p class="text-sm text-gray-200">@alex_p</p>
                        <p class="mt-3 text-sm">
                          Controlled vs. uncontrolled components - finally! This
                          topic has always confused me. Thanks for breaking it
                          down!
                        </p>
                      </div>
                    </div>
                    <hr class="my-4 border-white" />
                  </div>
                  <div>
                    <div class="flex gap-x-4">
                      <div class="mt-2 h-11 w-11 shrink-0">
                        <img
                          src="https://images.pexels.com/photos/7775637/pexels-photo-7775637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="jessicalee"
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="block">
                        <p class="flex items-center text-gray-200">
                          Jessica Lee · 
                          <span class="text-sm">5 hour ago</span>
                        </p>
                        <p class="text-sm text-gray-200">@jessicalee</p>
                        <p class="mt-3 text-sm">
                          This series is a goldmine for React developers!
                          Compound components are something I&#x27;ve been eager
                          to master. Thanks for this!
                        </p>
                      </div>
                    </div>
                    <hr class="my-4 border-white" />
                  </div>
                  <div>
                    <div class="flex gap-x-4">
                      <div class="mt-2 h-11 w-11 shrink-0">
                        <img
                          src="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="ryanjax"
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="block">
                        <p class="flex items-center text-gray-200">
                          Ryan Jackson · 
                          <span class="text-sm">Just now</span>
                        </p>
                        <p class="text-sm text-gray-200">@ryanjax</p>
                        <p class="mt-3 text-sm">
                          This is exactly what I needed to take my React skills
                          to the next level. Looking forward to diving into the
                          render props section!
                        </p>
                      </div>
                    </div>
                    <hr class="my-4 border-white" />
                  </div>
                  <div>
                    <div class="flex gap-x-4">
                      <div class="mt-2 h-11 w-11 shrink-0">
                        <img
                          src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="lauraw"
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="block">
                        <p class="flex items-center text-gray-200">
                          Laura Williams · 
                          <span class="text-sm">1 minutes ago</span>
                        </p>
                        <p class="text-sm text-gray-200">@lauraw</p>
                        <p class="mt-3 text-sm">
                          This series looks amazing! I&#x27;m especially excited
                          to learn more about controlled vs. uncontrolled
                          components. Thanks for sharing!
                        </p>
                      </div>
                    </div>
                    <hr class="my-4 border-white" />
                  </div>
                </div>
              </div>
              <div class="col-span-12 flex w-full shrink-0 flex-col gap-3 lg:w-[350px] xl:w-[400px]">
                <div class="w-full gap-x-2 border pr-2 md:flex">
                  <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div class="w-full pt-[56%]">
                      <div class="absolute inset-0">
                        <img
                          src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="JavaScript Fundamentals: Variables and Data Types"
                          class="h-full w-full"
                        />
                      </div>
                      <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        20:45
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                    <div class="h-12 w-12 shrink-0 md:hidden">
                      <img
                        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="reactpatterns"
                        class="h-full w-full rounded-full"
                      />
                    </div>
                    <div class="w-full pt-1 md:pt-0">
                      <h6 class="mb-1 text-sm font-semibold">
                        JavaScript Fundamentals: Variables and Data Types
                      </h6>
                      <p class="mb-0.5 mt-2 text-sm text-gray-200">
                        Code Master
                      </p>
                      <p class="flex text-sm text-gray-200">
                        10.3k Views · 44 minutes ago
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full gap-x-2 border pr-2 md:flex">
                  <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div class="w-full pt-[56%]">
                      <div class="absolute inset-0">
                        <img
                          src="https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Getting Started with Express.js"
                          class="h-full w-full"
                        />
                      </div>
                      <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        22:18
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                    <div class="h-12 w-12 shrink-0 md:hidden">
                      <img
                        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="reactpatterns"
                        class="h-full w-full rounded-full"
                      />
                    </div>
                    <div class="w-full pt-1 md:pt-0">
                      <h6 class="mb-1 text-sm font-semibold">
                        Getting Started with Express.js
                      </h6>
                      <p class="mb-0.5 mt-2 text-sm text-gray-200">
                        Express Learner
                      </p>
                      <p class="flex text-sm text-gray-200">
                        11.k Views · 5 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full gap-x-2 border pr-2 md:flex">
                  <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div class="w-full pt-[56%]">
                      <div class="absolute inset-0">
                        <img
                          src="https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Building a RESTful API with Node.js and Express"
                          class="h-full w-full"
                        />
                      </div>
                      <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        24:33
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                    <div class="h-12 w-12 shrink-0 md:hidden">
                      <img
                        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="reactpatterns"
                        class="h-full w-full rounded-full"
                      />
                    </div>
                    <div class="w-full pt-1 md:pt-0">
                      <h6 class="mb-1 text-sm font-semibold">
                        Building a RESTful API with Node.js and Express
                      </h6>
                      <p class="mb-0.5 mt-2 text-sm text-gray-200">
                        API Builder
                      </p>
                      <p class="flex text-sm text-gray-200">
                        14.5k Views · 7 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full gap-x-2 border pr-2 md:flex">
                  <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div class="w-full pt-[56%]">
                      <div class="absolute inset-0">
                        <img
                          src="https://images.pexels.com/photos/1739854/pexels-photo-1739854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Introduction to React Native"
                          class="h-full w-full"
                        />
                      </div>
                      <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        19:58
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                    <div class="h-12 w-12 shrink-0 md:hidden">
                      <img
                        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="reactpatterns"
                        class="h-full w-full rounded-full"
                      />
                    </div>
                    <div class="w-full pt-1 md:pt-0">
                      <h6 class="mb-1 text-sm font-semibold">
                        Introduction to React Native
                      </h6>
                      <p class="mb-0.5 mt-2 text-sm text-gray-200">
                        React Native Dev
                      </p>
                      <p class="flex text-sm text-gray-200">
                        10.9k Views · 8 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full gap-x-2 border pr-2 md:flex">
                  <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div class="w-full pt-[56%]">
                      <div class="absolute inset-0">
                        <img
                          src="https://images.pexels.com/photos/1144256/pexels-photo-1144256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Creating Custom Hooks in React"
                          class="h-full w-full"
                        />
                      </div>
                      <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        16:37
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                    <div class="h-12 w-12 shrink-0 md:hidden">
                      <img
                        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="reactpatterns"
                        class="h-full w-full rounded-full"
                      />
                    </div>
                    <div class="w-full pt-1 md:pt-0">
                      <h6 class="mb-1 text-sm font-semibold">
                        Creating Custom Hooks in React
                      </h6>
                      <p class="mb-0.5 mt-2 text-sm text-gray-200">
                        Hook Master
                      </p>
                      <p class="flex text-sm text-gray-200">
                        9.3k Views · 9 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full gap-x-2 border pr-2 md:flex">
                  <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div class="w-full pt-[56%]">
                      <div class="absolute inset-0">
                        <img
                          src="https://images.pexels.com/photos/1144260/pexels-photo-1144260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Building Scalable Web Applications with Django"
                          class="h-full w-full"
                        />
                      </div>
                      <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        32:18
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                    <div class="h-12 w-12 shrink-0 md:hidden">
                      <img
                        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="reactpatterns"
                        class="h-full w-full rounded-full"
                      />
                    </div>
                    <div class="w-full pt-1 md:pt-0">
                      <h6 class="mb-1 text-sm font-semibold">
                        Building Scalable Web Applications with Django
                      </h6>
                      <p class="mb-0.5 mt-2 text-sm text-gray-200">
                        Django Master
                      </p>
                      <p class="flex text-sm text-gray-200">
                        18.9M Views · 12 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full gap-x-2 border pr-2 md:flex">
                  <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div class="w-full pt-[56%]">
                      <div class="absolute inset-0">
                        <img
                          src="https://images.pexels.com/photos/1144276/pexels-photo-1144276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Creating Interactive UIs with React and D3"
                          class="h-full w-full"
                        />
                      </div>
                      <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        29:30
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                    <div class="h-12 w-12 shrink-0 md:hidden">
                      <img
                        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="reactpatterns"
                        class="h-full w-full rounded-full"
                      />
                    </div>
                    <div class="w-full pt-1 md:pt-0">
                      <h6 class="mb-1 text-sm font-semibold">
                        Creating Interactive UIs with React and D3
                      </h6>
                      <p class="mb-0.5 mt-2 text-sm text-gray-200">ReactD3</p>
                      <p class="flex text-sm text-gray-200">
                        20.1k Views · 14 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full gap-x-2 border pr-2 md:flex">
                  <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div class="w-full pt-[56%]">
                      <div class="absolute inset-0">
                        <img
                          src="https://images.pexels.com/photos/1144274/pexels-photo-1144274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Node.js Authentication with Passport.js"
                          class="h-full w-full"
                        />
                      </div>
                      <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        26:58
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                    <div class="h-12 w-12 shrink-0 md:hidden">
                      <img
                        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="reactpatterns"
                        class="h-full w-full rounded-full"
                      />
                    </div>
                    <div class="w-full pt-1 md:pt-0">
                      <h6 class="mb-1 text-sm font-semibold">
                        Node.js Authentication with Passport.js
                      </h6>
                      <p class="mb-0.5 mt-2 text-sm text-gray-200">
                        Passport Pro
                      </p>
                      <p class="flex text-sm text-gray-200">
                        21.2k Views · 15 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full gap-x-2 border pr-2 md:flex">
                  <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div class="w-full pt-[56%]">
                      <div class="absolute inset-0">
                        <img
                          src="https://images.pexels.com/photos/1144231/pexels-photo-1144231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Data Visualization with Tableau"
                          class="h-full w-full"
                        />
                      </div>
                      <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        32:14
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                    <div class="h-12 w-12 shrink-0 md:hidden">
                      <img
                        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="reactpatterns"
                        class="h-full w-full rounded-full"
                      />
                    </div>
                    <div class="w-full pt-1 md:pt-0">
                      <h6 class="mb-1 text-sm font-semibold">
                        Data Visualization with Tableau
                      </h6>
                      <p class="mb-0.5 mt-2 text-sm text-gray-200">
                        Tableau Master
                      </p>
                      <p class="flex text-sm text-gray-200">
                        24.5k Views · 18 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full gap-x-2 border pr-2 md:flex">
                  <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div class="w-full pt-[56%]">
                      <div class="absolute inset-0">
                        <img
                          src="https://images.pexels.com/photos/1144250/pexels-photo-1144250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Building Real-Time Applications with Socket.IO"
                          class="h-full w-full"
                        />
                      </div>
                      <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        27:37
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                    <div class="h-12 w-12 shrink-0 md:hidden">
                      <img
                        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="reactpatterns"
                        class="h-full w-full rounded-full"
                      />
                    </div>
                    <div class="w-full pt-1 md:pt-0">
                      <h6 class="mb-1 text-sm font-semibold">
                        Building Real-Time Applications with Socket.IO
                      </h6>
                      <p class="mb-0.5 mt-2 text-sm text-gray-200">
                        Socket.IO Expert
                      </p>
                      <p class="flex text-sm text-gray-200">
                        25.6k Views · 19 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full gap-x-2 border pr-2 md:flex">
                  <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div class="w-full pt-[56%]">
                      <div class="absolute inset-0">
                        <img
                          src="https://images.pexels.com/photos/1115824/pexels-photo-1115824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Advanced CSS: Animations and Transitions"
                          class="h-full w-full"
                        />
                      </div>
                      <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        31:55
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                    <div class="h-12 w-12 shrink-0 md:hidden">
                      <img
                        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="reactpatterns"
                        class="h-full w-full rounded-full"
                      />
                    </div>
                    <div class="w-full pt-1 md:pt-0">
                      <h6 class="mb-1 text-sm font-semibold">
                        Advanced CSS: Animations and Transitions
                      </h6>
                      <p class="mb-0.5 mt-2 text-sm text-gray-200">
                        CSS Animations
                      </p>
                      <p class="flex text-sm text-gray-200">
                        28.9k Views · 22 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full gap-x-2 border pr-2 md:flex">
                  <div class="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div class="w-full pt-[56%]">
                      <div class="absolute inset-0">
                        <img
                          src="https://images.pexels.com/photos/1115808/pexels-photo-1115808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Advanced React Patterns"
                          class="h-full w-full"
                        />
                      </div>
                      <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                        30:25
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                    <div class="h-12 w-12 shrink-0 md:hidden">
                      <img
                        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="reactpatterns"
                        class="h-full w-full rounded-full"
                      />
                    </div>
                    <div class="w-full pt-1 md:pt-0">
                      <h6 class="mb-1 text-sm font-semibold">
                        Advanced React Patterns
                      </h6>
                      <p class="mb-0.5 mt-2 text-sm text-gray-200">
                        React Patterns
                      </p>
                      <p class="flex text-sm text-gray-200">
                        30.1k Views · 1 day ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default VideoDetailPage;
