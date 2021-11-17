import React from "react";
import classes from "./Plan.module.scss";
import ButtonCustom from "../../components/ButtonCustom";

const planArray = [
  {
    name: "Free",
    listArray: [
      {
        yes: "true",
        text: "Pellentesque interdum libero et",
      },
      {
        yes: "true",
        text: "Pellentesque posuere jdfkdfkdfhd",
      },
      {
        yes: "true",
        text: "Cras sed felis eget",
      },
      {
        yes: "true",
        text: "Maecenas eget luctus",
      },
      {
        yes: "true",
        text: "Nullam vitae augue",
      },
    ],
    price: "0",
    isactive: "false",
  },
  {
    name: "Pro",
    listArray: [
      {
        yes: "true",
        text: "Maecenas eget luctus purus",
      },
      {
        yes: "true",
        text: "Graesent in sollicitudin velit",
      },
      {
        yes: "true",
        text: "DOnec in orci vitae nisi",
      },
      {
        yes: "true",
        text: "Class aptent taciti",
      },
      {
        yes: "false",
        text: "Ut blandit vestibulum",
      },
    ],
    price: "12",
    isactive: "false",
  },
  {
    name: "Team",
    listArray: [
      {
        yes: "true",
        text: "Etlam ac finibus nisi, a porttitor",
      },
      {
        yes: "true",
        text: "Quisque tincidunt velit a sapien vulputate",
      },
      {
        yes: "true",
        text: "Vivamus pulvinar",
      },
      {
        yes: "true",
        text: "In hac habitasse platea",
      },
      {
        yes: "false",
        text: "Nullam vitea augue",
      },
    ],
    price: "23",
    isactive: "true",
  },
  {
    name: "Agency",
    listArray: [
      {
        yes: "true",
        text: "Praesent in sollicitudin velit",
      },
      {
        yes: "true",
        text: "Nulla tincidunt finibus interdum",
      },
      {
        yes: "true",
        text: "Nullam vitae augue",
      },
      {
        yes: "true",
        text: "Curabitur eleifend",
      },
      {
        yes: "true",
        text: "Quisque vel ex enim",
      },
    ],
    price: "43",
    isactive: "false",
  },
];

const Plan = () => {
  return (
    <div className={classes["plans-container"]}>
      {planArray.map((plans) => (
        <div
          className={`${classes["plans-card"]} ${
            plans.isactive === "true" ? classes["active-plan"] : ""
          }`}
        >
          <h2>{plans.name}</h2>
          <ul>
            {plans.listArray.map((listItem) => {
              return listItem.yes === "true" ? (
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_132_129)">
                      <path
                        d="M6.80679 12C6.50258 12 6.21445 11.884 6.02982 11.684L3.53106 8.986C3.45381 8.90268 3.39741 8.80774 3.36508 8.70659C3.33276 8.60545 3.32515 8.50009 3.34269 8.39654C3.36022 8.29299 3.40256 8.19329 3.46728 8.10312C3.53201 8.01295 3.61784 7.93409 3.71988 7.87104C3.82189 7.80774 3.93818 7.7615 4.06209 7.73499C4.18601 7.70848 4.3151 7.70221 4.44198 7.71654C4.56887 7.73088 4.69104 7.76553 4.8015 7.81852C4.91196 7.87151 5.00854 7.9418 5.0857 8.02534L6.72986 9.79922L10.8637 4.37472C11.0008 4.19561 11.2192 4.06826 11.4711 4.02058C11.7229 3.97291 11.9876 4.00881 12.2071 4.12041C12.6638 4.35243 12.8044 4.8439 12.519 5.21765L7.63482 11.624C7.55144 11.7338 7.43652 11.8254 7.30002 11.8907C7.16352 11.956 7.00958 11.9932 6.85155 11.9989C6.83616 12 6.82218 12 6.80679 12Z"
                        fill="#181059"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_132_129">
                        <rect
                          width="9.92"
                          height="8.32"
                          fill="white"
                          transform="translate(3.04004 3.84003)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>{listItem.text}</span>
                </li>
              ) : (
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.06046 8.00002L12.0292 5.03127C12.1701 4.89062 12.2494 4.69976 12.2495 4.50068C12.2497 4.3016 12.1708 4.1106 12.0301 3.96971C11.8895 3.82881 11.6986 3.74956 11.4996 3.74938C11.3005 3.74921 11.1095 3.82812 10.9686 3.96877L7.99984 6.93752L5.03109 3.96877C4.89019 3.82787 4.69909 3.74872 4.49984 3.74872C4.30058 3.74872 4.10948 3.82787 3.96859 3.96877C3.82769 4.10967 3.74854 4.30076 3.74854 4.50002C3.74854 4.69928 3.82769 4.89037 3.96859 5.03127L6.93734 8.00002L3.96859 10.9688C3.82769 11.1097 3.74854 11.3008 3.74854 11.5C3.74854 11.6993 3.82769 11.8904 3.96859 12.0313C4.10948 12.1722 4.30058 12.2513 4.49984 12.2513C4.69909 12.2513 4.89019 12.1722 5.03109 12.0313L7.99984 9.06252L10.9686 12.0313C11.1095 12.1722 11.3006 12.2513 11.4998 12.2513C11.6991 12.2513 11.8902 12.1722 12.0311 12.0313C12.172 11.8904 12.2511 11.6993 12.2511 11.5C12.2511 11.3008 12.172 11.1097 12.0311 10.9688L9.06046 8.00002Z"
                      fill="#181059"
                    />
                  </svg>
                  <span>{listItem.text}</span>
                </li>
              );
            })}
          </ul>
          <h4>
            $<h1>{plans.price}</h1>
          </h4>
          {plans.isactive !== "true" ? (
            <ButtonCustom backgroundColor="#ebf2ff" color="#3860AD">Downgrade</ButtonCustom>
          ) : (
            <h2 style={{ color: "#1C7714", textAlign: "center" }}>
              Current Plan
            </h2>
          )}
        </div>
      ))}
    </div>
  );
};

export default Plan;
