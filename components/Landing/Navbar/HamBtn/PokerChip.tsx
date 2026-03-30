
import React from "react";
import { forwardRef, useEffect, useState } from "react";

interface HamPokerChipProps {
  svgClass: string;
  isHamOpen: boolean;
}

const HamPokerChip = forwardRef<SVGSVGElement, HamPokerChipProps>(
  ({ svgClass, isHamOpen }, ref) => {
    const [, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
      <>
        {!isHamOpen ? (
          <svg
            className={svgClass}
            style={{
              scale: "1",
            }}
            viewBox="0 0 91 91"
            fill="#190D2C"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
          >
            <g filter="url(#filter0_d_1964_6826)">
              <circle
                cx="45.0386"
                cy="45.9351"
                r="34.8756"
                stroke="#EDCF89"
                strokeWidth="0.306546"
              />
              <mask
                id="mask0_1964_6826"
                maskUnits="userSpaceOnUse"
                x="8"
                y="9"
                width="74"
                height="74"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M40.8652 20.6755C42.2232 20.4528 43.6171 20.3371 45.0381 20.3371C46.4097 20.3371 47.7561 20.445 49.0694 20.6527L50.9804 9H38.9971L40.8652 20.6755ZM30.0203 25.2033L23.1186 15.5632L14.6324 24.0239L24.2431 31.0054C25.8461 28.7764 27.7985 26.8156 30.0203 25.2033ZM59.9909 25.1564L66.8591 15.5632L75.3453 24.0239L65.7992 30.9584C64.187 28.7272 62.2239 26.7663 59.9909 25.1564ZM70.3172 41.8911C70.5262 43.2079 70.6347 44.5581 70.6347 45.9337C70.6347 47.3505 70.5196 48.7403 70.2982 50.0945L81.9776 51.9566L81.9709 39.9733L70.3172 41.8911ZM65.7229 61.014C64.1042 63.2304 62.138 65.1768 59.9044 66.7731L66.8591 76.4076L75.3453 67.9468L65.7229 61.014ZM49.0528 71.2173C47.7448 71.4233 46.4039 71.5303 45.0381 71.5303C43.6227 71.5303 42.2342 71.4154 40.8813 71.1945L38.9971 82.9709H50.9804L49.0528 71.2173ZM30.1068 66.7266C27.8844 65.1278 25.9288 63.1816 24.3194 60.9675L14.6324 67.9468L23.1185 76.4076L30.1068 66.7266ZM19.78 50.1072C19.5573 48.749 19.4414 47.3549 19.4414 45.9337C19.4414 44.5734 19.5476 43.2379 19.752 41.9349L8 40.0143L8.00665 51.9976L19.78 50.1072Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1964_6826)">
                <circle cx="45.0391" cy="45.935" r="35.0289" fill="#EDCF89" />
              </g>
              <circle
                cx="45.038"
                cy="45.9345"
                r="25.4433"
                stroke="#EDCF89"
                strokeWidth="0.306546"
              />
              <circle
                cx="45.0388"
                cy="45.9353"
                r="22.8377"
                stroke="#EDCF89"
                strokeWidth="0.613093"
                strokeDasharray="6.13 6.13"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1964_6826"
                x="0.00976562"
                y="0.906128"
                width="90.0581"
                height="90.0579"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.894118 0 0 0 0 0.745098 0 0 0 0 0.356863 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1964_6826"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1964_6826"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        ) : window.innerWidth > 585 ? (
          <svg
            width="1103"
            height="1103"
            viewBox="0 0 1103 1103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            ref={ref}
            className={svgClass}
            style={{ transform: "rotate(90deg)" }}
          >
            <g filter="url(#filter0_d_3547_622)">
              <circle
                cx="551.802"
                cy="551.462"
                r="422.792"
                transform="rotate(11 551.802 551.462)"
                fill="url(#paint0_linear_3547_622)"
                stroke="#EDCF89"
                strokeWidth="3.71621"
              />
              <mask
                id="mask0_3547_622"
                maskUnits="userSpaceOnUse"
                x="96"
                y="103"
                width="894"
                height="901"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M620.778 248.911L651.376 119.586L492.955 103.773L510.763 243.789C543.273 239.457 577.029 240.246 611.003 246.85C614.284 247.488 617.543 248.175 620.778 248.911ZM405.573 277.749L340.878 155.519L221.463 242.793L324.934 339.678C348.274 314.723 375.562 293.805 405.573 277.749ZM260.791 443.587L124.172 393.099L96.5317 535.717L241.64 540.475C242.224 524.521 244.05 508.407 247.192 492.244C250.464 475.413 255.038 459.166 260.791 443.587ZM259.51 655.799C178.046 686.115 117.714 708.691 117.714 708.691L220.478 869.611C220.478 869.611 265.709 825.309 327.037 765.433C297.221 734.063 274.149 696.683 259.51 655.799ZM442.684 841.993L393.674 975.989L589.073 1003.01L576.713 860.833C549.223 863.032 520.98 861.575 492.586 856.055C475.306 852.696 458.642 847.964 442.684 841.993ZM710.098 818.343L784.245 942.357L935.687 813.731L808.054 726.577C782.326 764.185 748.733 795.409 710.098 818.343ZM854.48 619.802L989.801 650.595L984.607 466.964L856.367 491.662C863.878 529.852 864.281 570.101 856.397 610.661C855.801 613.728 855.162 616.775 854.48 619.802ZM812.718 383.501C880.85 333.339 929.37 293.316 929.37 293.316L813.882 178.294C813.882 178.294 784.103 233.177 739.143 304.002C768.277 326.094 793.134 353.085 812.718 383.501Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_3547_622)">
                <circle
                  cx="551.802"
                  cy="551.459"
                  r="424.65"
                  transform="rotate(11 551.802 551.459)"
                  fill="#EDCF89"
                />
              </g>
              <path
                d="M895.151 617.94C858.341 807.314 674.981 930.992 485.607 894.181C296.232 857.37 172.555 674.011 209.366 484.637C246.176 295.262 429.536 171.585 618.91 208.395C808.285 245.206 931.962 428.565 895.151 617.94Z"
                fill="url(#paint1_linear_3547_622)"
                stroke="#EDCF89"
                strokeWidth="3.71621"
              />
              <rect
                x="301"
                y="171"
                width="644"
                height="645"
                transform="rotate(11.6671 301 171)"
                fill="url(#pattern0_3547_622)"
              />
        
            </g>
            <defs>
              <filter
                id="filter0_d_3547_622"
                x="0.882896"
                y="0.646095"
                width="1101.76"
                height="1101.76"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="60.6142" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.894118 0 0 0 0 0.745098 0 0 0 0 0.356863 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3547_622"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3547_622"
                  result="shape"
                />
              </filter>
              <pattern
                id="pattern0_3547_622"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_3547_622"
                  transform="scale(0.0015528 0.00155039)"
                />
              </pattern>
              <linearGradient
                id="paint0_linear_3547_622"
                x1="1285.74"
                y1="1168.71"
                x2="472.891"
                y2="474.222"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#272017" />
                <stop offset="1" stopColor="#07050A" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_3547_622"
                x1="1050.65"
                y1="1168.16"
                x2="500.389"
                y2="476.136"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#272017" />
                <stop offset="1" stopColor="#07050A" />
              </linearGradient>
              <image
                id="image0_3547_622"
                width="644"
                height="645"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        ) : (
          <svg
            width="283"
            height="282"
            viewBox="0 0 283 282"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            style={{ transform: "rotate(90deg)", zIndex: 5120 }}
          >
            <circle
              cx="139.878"
              cy="139.878"
              r="139.266"
              transform="matrix(0.999997 -0.00243934 -0.00243934 -0.999997 2.0791 281.669)"
              fill="url(#paint0_linear_2_4)"
              stroke="#EDCF89"
              stroke-width="1.22411"
            />
            <mask
              id="mask0_2_4"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="282"
              height="282"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M121.874 213.874L103.717 281.374L179.032 281.566L160.95 213.938C154.812 215.576 148.365 216.456 141.714 216.472C134.849 216.489 128.196 215.584 121.874 213.874ZM88.5964 194.646L38.0126 244.824L0.749655 179.372L69.123 161.379C72.6463 174.158 79.4612 185.57 88.5964 194.646ZM69.2041 121.068L1.49715 101.139L40.8682 36.9333L89.0843 87.6131C79.7719 96.7001 72.8129 108.186 69.2041 121.068ZM122.032 68.8232L103.717 0.73359L179.032 0.541966L160.792 68.7599C154.588 67.1183 148.07 66.251 141.347 66.2674C134.668 66.2837 128.193 67.1716 122.032 68.8232ZM195.152 88.7848L244.281 39.9027L281.876 105.164L214.379 123.035C211.085 109.903 204.334 98.1464 195.152 88.7848ZM213.356 163.38L280.483 183.029L241.439 247.433L192.692 196.351C202.227 187.475 209.448 176.15 213.356 163.38Z"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_2_4)">
              <g filter="url(#filter0_d_2_4)">
                <circle
                  cx="139.878"
                  cy="139.878"
                  r="139.878"
                  transform="matrix(0.999997 -0.00243934 -0.00243934 -0.999997 2.07812 281.67)"
                  fill="#EDCF89"
                />
              </g>
            </g>
            <path
              d="M256.385 141.695C256.23 78.0379 204.499 26.5591 140.842 26.7144C77.1841 26.8697 25.7054 78.6002 25.8606 142.258C26.0159 205.915 77.7465 257.394 141.404 257.239C205.062 257.084 256.54 205.353 256.385 141.695Z"
              fill="url(#paint1_linear_2_4)"
              stroke="#EDCF89"
              stroke-width="1.22411"
            />
            <path
              d="M240.588 172.26C242.506 165.874 243.823 159.227 244.471 152.387L243.939 152.337C244.253 149.021 244.41 145.66 244.402 142.26C244.394 138.861 244.22 135.5 243.89 132.186L244.422 132.133C243.74 125.296 242.391 118.656 240.442 112.279L239.93 112.436C237.946 105.943 235.336 99.7238 232.17 93.8484L232.641 93.5946C229.421 87.6165 225.628 81.9924 221.337 76.7956L220.924 77.1362C216.639 71.947 211.855 67.1859 206.645 62.9264L206.984 62.5122C201.766 58.2465 196.123 54.4813 190.13 51.2897L189.878 51.7619C183.987 48.6252 177.756 46.0455 171.253 44.0927L171.407 43.5803C165.02 41.6624 158.374 40.3461 151.534 39.6973L151.483 40.2299C148.168 39.9154 144.807 39.7585 141.407 39.7668C138.007 39.7751 134.647 39.9484 131.333 40.279L131.28 39.7467C124.443 40.4289 117.803 41.7775 111.426 43.7266L111.582 44.2383C105.09 46.2227 98.8704 48.8328 92.9951 51.9983L92.7413 51.5273C86.7631 54.7481 81.1391 58.5407 75.9423 62.8318L76.2829 63.2444C71.0937 67.5292 66.3325 72.3136 62.0731 77.5237L61.6589 77.1851C57.3932 82.4028 53.628 88.0453 50.4364 94.0391L50.9086 94.2905C47.7719 100.181 45.1921 106.413 43.2394 112.915L42.727 112.762C40.809 119.148 39.4928 125.795 38.8439 132.635L39.3765 132.685C39.062 136.001 38.9051 139.362 38.9134 142.762C38.9217 146.161 39.095 149.522 39.4257 152.836L38.8933 152.889C39.5755 159.726 40.9242 166.366 42.8733 172.743L43.385 172.586C45.3694 179.079 47.9795 185.298 51.1449 191.174L50.6739 191.427C53.8947 197.406 57.6874 203.03 61.9785 208.226L62.3911 207.886C66.6759 213.075 71.4603 217.836 76.6704 222.096L76.3318 222.51C81.5495 226.776 87.192 230.541 93.1858 233.732L93.4372 233.26C99.328 236.397 105.56 238.977 112.062 240.929L111.908 241.442C118.295 243.36 124.941 244.676 131.781 245.325L131.832 244.792C135.147 245.107 138.509 245.264 141.908 245.255C145.308 245.247 148.668 245.074 151.982 244.743L152.035 245.275C158.872 244.593 165.512 243.244 171.889 241.295L171.733 240.784C178.226 238.799 184.445 236.189 190.32 233.024L190.574 233.495C196.552 230.274 202.176 226.481 207.373 222.19L207.032 221.778C212.222 217.493 216.983 212.708 221.242 207.498L221.656 207.837C225.922 202.619 229.687 196.977 232.879 190.983L232.407 190.731C235.543 184.841 238.123 178.609 240.076 172.107L240.588 172.26Z"
              stroke="#EDCF89"
              stroke-width="1.07001"
              stroke-dasharray="18.63 18.63"
            />
          
            <defs>
              <filter
                id="filter0_d_2_4"
                x="0.975945"
                y="1.57349"
                width="281.277"
                height="281.277"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.760383" />
                <feGaussianBlur stdDeviation="0.380191" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_4"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_4"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2_4"
                x1="381.636"
                y1="343.197"
                x2="113.885"
                y2="114.436"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#272017" />
                <stop offset="1" stopColor="#07050A" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2_4"
                x1="300.737"
                y1="-0.658447"
                x2="119.642"
                y2="163.105"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#272017" />
                <stop offset="1" stopColor="#07050A" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </>
    );
  }
);

HamPokerChip.displayName = "HamPokerChip";

export default HamPokerChip;
