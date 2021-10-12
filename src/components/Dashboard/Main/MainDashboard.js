import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import Sidebar from "./../../sidebar/Sidebar";
import "./maindashboard.css";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
const MainDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <>
      <Sidebar />
      <div className="parent content">
        <div className="column-1 ">
          <header className="header">
            <div className="header-info">
              <div className="page-info">
                <h2 className="page-name">Dashboard</h2>
                <p className="date">Tuesday, 2 Feb 2021</p>
              </div>
            </div>
          </header>
          <main>
            <div className="d-flex total-summary">
              <section className="box-content total-summary-item">
                <header className="total-header ">
                  <span className="icon-total">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="#3B5162" stroke-width="1.8" />
                      <path d="M10.459 9.94112C10.459 9.34702 10.916 8.97489 11.5362 8.90307V10.9988C11.471 10.9857 11.4122 10.9661 11.3534 10.9465C10.7593 10.7507 10.459 10.4112 10.459 9.94112ZM13.7233 14.015C13.7233 14.6548 13.2337 15.0792 12.5417 15.1379V12.8855C12.5874 12.8986 12.6331 12.9116 12.6722 12.9182C13.4034 13.1206 13.7233 13.4796 13.7233 14.015ZM12.5547 17.3772L12.5482 16.5481C14.337 16.3783 15.473 15.3925 15.473 13.8387C15.473 12.2588 14.4088 11.5929 13.0966 11.3121L12.5417 11.1946V8.91613C13.2337 9.02712 13.6189 9.54941 13.6385 10.0717H15.3098C15.2837 8.71374 14.2195 7.68222 12.5678 7.50595V6.65723H11.5101V7.49942C9.9302 7.64305 8.68976 8.51136 8.68976 10.0782C8.68976 11.5602 9.76046 12.3175 10.9748 12.5852L11.5362 12.7093V15.1379C10.7006 15.0269 10.2632 14.5242 10.2305 13.9236H8.52002C8.53308 15.1314 9.34263 16.4045 11.5036 16.5611L11.4971 17.3772H12.5547Z" fill="#3B5162" />
                    </svg>
                  </span>
                  <span className="porcentage positive">+32.40%</span>
                  <span className="icon-status positive">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9999 21C11.5795 21 11.2321 20.6922 11.1771 20.2928L11.1696 20.1818L11.17 5.799L5.91871 10.9953C5.59515 11.3155 5.06942 11.3166 4.74446 10.9978C4.44905 10.7079 4.42125 10.2534 4.66174 9.9326L4.74193 9.84067L11.4111 3.24067L11.4285 3.22449C11.4465 3.20773 11.4652 3.19176 11.4846 3.17661L11.4111 3.24067C11.4432 3.20887 11.4773 3.18022 11.513 3.15472C11.5355 3.1393 11.5588 3.12434 11.5828 3.11054C11.6364 3.07936 11.6924 3.0552 11.7501 3.03737C11.7704 3.03137 11.7911 3.02579 11.8122 3.02099C11.8283 3.0171 11.8446 3.01389 11.861 3.01117C11.8788 3.00845 11.8965 3.00608 11.9145 3.00427C11.9325 3.00223 11.9509 3.00097 11.9694 3.00031C11.9796 3.00018 11.9897 3 11.9999 3L12.0275 3.00024C12.0479 3.00092 12.0683 3.00234 12.0887 3.00449L11.9999 3C12.0473 3 12.0938 3.00392 12.139 3.01144C12.1596 3.0148 12.1803 3.01906 12.2009 3.0241C12.2172 3.02814 12.2332 3.03258 12.2491 3.03748C12.2679 3.04327 12.2868 3.04988 12.3055 3.05718C12.3249 3.06477 12.3438 3.07297 12.3623 3.08183C12.3765 3.08855 12.3911 3.09607 12.4055 3.10404C12.4325 3.11908 12.4579 3.135 12.4823 3.15219C12.4861 3.1549 12.4903 3.15793 12.4945 3.161C12.5316 3.18829 12.5643 3.21657 12.5946 3.24718L19.258 9.84062C19.5816 10.1608 19.5805 10.6788 19.2556 10.9977C18.9602 11.2876 18.4989 11.313 18.1743 11.0747L18.0813 10.9953L12.831 5.8L12.8302 20.1818C12.8302 20.6337 12.4585 21 11.9999 21Z" fill="#3B5162" />
                    </svg>
                  </span>
                </header>
                <div className="total-content">
                  <span className="total-number">$10,234</span>
                  <span className="total-msg">Ganancias totales</span>
                </div>
              </section>
              <section className="box-content total-summary-item">
                <header className="total-header">
                  <span className="icon-total">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.9857 2C18.0482 2 20 3.43503 20 6.25765V20.3309C20 20.7736 19.8285 21.1982 19.5232 21.5112C19.2179 21.8242 18.8038 22 18.3608 22C18.0965 21.9957 17.8368 21.9291 17.5863 21.7971L11.974 18.6635L6.38442 21.8037C5.7112 22.1624 4.89545 21.9969 4.38431 21.3975L4.28627 21.2719L4.19263 21.1174C4.07042 20.8782 4.00448 20.613 4 20.3309V6.43434C4 3.49929 5.90915 2 9.01434 2H14.9857ZM14.9857 3.44775H9.01434C6.61925 3.44775 5.41205 4.39579 5.41205 6.43434L5.41195 20.3189C5.41267 20.3631 5.42346 20.4065 5.41172 20.3897L5.44919 20.4519C5.51373 20.5421 5.63485 20.5715 5.71962 20.5265L11.3068 17.3883C11.7233 17.1576 12.225 17.1576 12.6435 17.3894L18.2463 20.5173C18.2887 20.5397 18.3355 20.5517 18.372 20.5523C18.4293 20.5523 18.4842 20.529 18.5247 20.4875C18.5652 20.446 18.5879 20.3897 18.5879 20.3309V6.25765C18.5879 4.35788 17.35 3.44775 14.9857 3.44775ZM15.4079 8.31663C15.7978 8.31663 16.1139 8.64072 16.1139 9.0405C16.1139 9.40697 15.8483 9.70984 15.5037 9.75777L15.4079 9.76438H8.54042C8.1505 9.76438 7.8344 9.44029 7.8344 9.0405C7.8344 8.67404 8.10001 8.37117 8.44462 8.32324L8.54042 8.31663H15.4079Z" fill="#3B5162" />
                    </svg>

                  </span>
                  <span className="porcentage negative">-16.60%</span>
                  <span className="icon-status negative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0001 3C12.4205 3 12.7679 3.3078 12.8229 3.70716L12.8304 3.81818L12.83 18.201L18.0813 13.0047C18.4049 12.6845 18.9306 12.6834 19.2555 13.0022C19.551 13.2921 19.5787 13.7466 19.3383 14.0674L19.2581 14.1593L12.5889 20.7593L12.5715 20.7755C12.5535 20.7923 12.5348 20.8082 12.5154 20.8234L12.5889 20.7593C12.5568 20.7911 12.5227 20.8198 12.487 20.8453C12.4645 20.8607 12.4412 20.8757 12.4172 20.8895C12.3636 20.9206 12.3076 20.9448 12.2499 20.9626C12.2296 20.9686 12.2089 20.9742 12.1878 20.979C12.1717 20.9829 12.1554 20.9861 12.139 20.9888C12.1212 20.9915 12.1035 20.9939 12.0855 20.9957C12.0675 20.9978 12.0491 20.999 12.0306 20.9997C12.0204 20.9998 12.0103 21 12.0001 21L11.9725 20.9998C11.9521 20.9991 11.9317 20.9977 11.9113 20.9955L12.0001 21C11.9527 21 11.9062 20.9961 11.861 20.9886C11.8404 20.9852 11.8197 20.9809 11.7991 20.9759C11.7828 20.9719 11.7668 20.9674 11.7509 20.9625C11.7321 20.9567 11.7132 20.9501 11.6945 20.9428C11.6751 20.9352 11.6562 20.927 11.6377 20.9182C11.6235 20.9114 11.6089 20.9039 11.5945 20.896C11.5675 20.8809 11.5421 20.865 11.5177 20.8478C11.5139 20.8451 11.5097 20.8421 11.5055 20.839C11.4684 20.8117 11.4357 20.7834 11.4054 20.7528L4.74198 14.1594C4.41839 13.8392 4.41948 13.3212 4.74441 13.0023C5.0398 12.7124 5.50114 12.687 5.8257 12.9253L5.91866 13.0047L11.169 18.2L11.1698 3.81818C11.1698 3.36631 11.5415 3 12.0001 3Z" fill="#3B5162" />
                    </svg>
                  </span>
                </header>
                <div className="total-content">
                  <span className="total-number">138</span>
                  <span className="total-msg">Total productos ordenados</span>
                </div>
              </section>
              <section className="box-content total-summary-item">
                <header className="total-header">
                  <span className="icon-total">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.59149 14.4563L9.91127 14.4576C14.5557 14.4981 17.1835 15.4361 17.1835 17.9983C17.1835 20.5061 14.665 21.4736 10.2236 21.5546L9.59149 21.5603C4.74715 21.5603 2.00049 20.6394 2.00049 18.0183C2.00049 15.3937 4.75808 14.4563 9.59149 14.4563ZM9.59149 15.9563C5.57414 15.9563 3.50049 16.6612 3.50049 18.0183C3.50049 19.3667 5.56916 20.0603 9.59149 20.0603C13.6091 20.0603 15.6835 19.3552 15.6835 17.9983C15.6835 16.6505 13.6129 15.9563 9.59149 15.9563ZM17.5872 13.7481C18.1677 13.7876 18.7449 13.8708 19.2996 13.9938C20.4877 14.2301 21.371 14.6713 21.7757 15.5204C22.0745 16.1491 22.0745 16.8806 21.7757 17.5092C21.3733 18.3563 20.4992 18.7942 19.3044 19.04C18.8987 19.1234 18.5021 18.8622 18.4187 18.4565C18.3352 18.0507 18.5965 17.6542 19.0022 17.5707C19.771 17.4126 20.2827 17.1562 20.4209 16.8654C20.5261 16.6441 20.5261 16.3856 20.4213 16.165C20.2822 15.8732 19.7678 15.6163 18.9912 15.4616C18.4938 15.3515 17.991 15.279 17.4854 15.2446C17.0721 15.2165 16.7599 14.8587 16.788 14.4455C16.8161 14.0322 17.1739 13.72 17.5872 13.7481ZM9.59149 2.49976C12.4395 2.49976 14.7265 4.78636 14.7265 7.63376C14.7265 10.482 12.4397 12.7688 9.59149 12.7688C6.74341 12.7688 4.45749 10.4821 4.45749 7.63376C4.45749 4.78622 6.74359 2.49976 9.59149 2.49976ZM16.0202 3.56936C18.2551 3.56936 20.0672 5.38183 20.0672 7.61636C20.0672 9.85157 18.2554 11.6634 16.0202 11.6634C15.606 11.6634 15.2702 11.3276 15.2702 10.9134C15.2702 10.4991 15.606 10.1634 16.0202 10.1634C17.427 10.1634 18.5672 9.02314 18.5672 7.61636C18.5672 6.21019 17.4266 5.06936 16.0202 5.06936C15.606 5.06936 15.2702 4.73357 15.2702 4.31936C15.2702 3.90514 15.606 3.56936 16.0202 3.56936ZM9.59149 3.99976C7.57207 3.99976 5.95749 5.6146 5.95749 7.63376C5.95749 9.65379 7.57195 11.2688 9.59149 11.2688C11.6113 11.2688 13.2265 9.65354 13.2265 7.63376C13.2265 5.61484 11.6111 3.99976 9.59149 3.99976Z" fill="#3B5162" />
                    </svg>
                  </span>
                  <span className="porcentage positive">+10.50%</span>
                  <span className="icon-status positive">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9999 21C11.5795 21 11.2321 20.6922 11.1771 20.2928L11.1696 20.1818L11.17 5.799L5.91871 10.9953C5.59515 11.3155 5.06942 11.3166 4.74446 10.9978C4.44905 10.7079 4.42125 10.2534 4.66174 9.9326L4.74193 9.84067L11.4111 3.24067L11.4285 3.22449C11.4465 3.20773 11.4652 3.19176 11.4846 3.17661L11.4111 3.24067C11.4432 3.20887 11.4773 3.18022 11.513 3.15472C11.5355 3.1393 11.5588 3.12434 11.5828 3.11054C11.6364 3.07936 11.6924 3.0552 11.7501 3.03737C11.7704 3.03137 11.7911 3.02579 11.8122 3.02099C11.8283 3.0171 11.8446 3.01389 11.861 3.01117C11.8788 3.00845 11.8965 3.00608 11.9145 3.00427C11.9325 3.00223 11.9509 3.00097 11.9694 3.00031C11.9796 3.00018 11.9897 3 11.9999 3L12.0275 3.00024C12.0479 3.00092 12.0683 3.00234 12.0887 3.00449L11.9999 3C12.0473 3 12.0938 3.00392 12.139 3.01144C12.1596 3.0148 12.1803 3.01906 12.2009 3.0241C12.2172 3.02814 12.2332 3.03258 12.2491 3.03748C12.2679 3.04327 12.2868 3.04988 12.3055 3.05718C12.3249 3.06477 12.3438 3.07297 12.3623 3.08183C12.3765 3.08855 12.3911 3.09607 12.4055 3.10404C12.4325 3.11908 12.4579 3.135 12.4823 3.15219C12.4861 3.1549 12.4903 3.15793 12.4945 3.161C12.5316 3.18829 12.5643 3.21657 12.5946 3.24718L19.258 9.84062C19.5816 10.1608 19.5805 10.6788 19.2556 10.9977C18.9602 11.2876 18.4989 11.313 18.1743 11.0747L18.0813 10.9953L12.831 5.8L12.8302 20.1818C12.8302 20.6337 12.4585 21 11.9999 21Z" fill="#3B5162" />
                    </svg>
                  </span>
                </header>
                <div className="total-content">
                  <span className="total-number">68</span>
                  <span className="total-msg">Total clientes</span>
                </div>
              </section>

            </div>
            <div className="box-content order-report">
              <header className="filter-header">
                <h4 className="summary-title">Reporte de ordenes</h4>
                <div class="btn-filter center">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.2374 14.0725C20.3126 14.0725 21.9996 15.7377 21.9996 17.7862C21.9996 19.8336 20.3126 21.5 18.2374 21.5C16.1621 21.5 14.4751 19.8336 14.4751 17.7862C14.4751 15.7377 16.1621 14.0725 18.2374 14.0725ZM18.2374 15.8144C17.135 15.8144 16.2397 16.6981 16.2397 17.7862C16.2397 18.8732 17.135 19.7581 18.2374 19.7581C19.3397 19.7581 20.235 18.8732 20.235 17.7862C20.235 16.6981 19.3397 15.8144 18.2374 15.8144ZM10.1172 16.9149C10.6042 16.9149 10.9995 17.3051 10.9995 17.7859C10.9995 18.2667 10.6042 18.6568 10.1172 18.6568H2.88316C2.39611 18.6568 2.00082 18.2667 2.00082 17.7859C2.00082 17.3051 2.39611 16.9149 2.88316 16.9149H10.1172ZM5.76229 2.5C7.83754 2.5 9.52457 4.16643 9.52457 6.21376C9.52457 8.26109 7.83754 9.92753 5.76229 9.92753C3.68821 9.92753 2 8.26109 2 6.21376C2 4.16643 3.68821 2.5 5.76229 2.5ZM5.76229 4.24192C4.66113 4.24192 3.76467 5.12681 3.76467 6.21376C3.76467 7.30072 4.66113 8.18561 5.76229 8.18561C6.86462 8.18561 7.7599 7.30072 7.7599 6.21376C7.7599 5.12681 6.86462 4.24192 5.76229 4.24192ZM21.1177 5.34304C21.6047 5.34304 22 5.73323 22 6.214C22 6.69476 21.6047 7.08495 21.1177 7.08495H13.8825C13.3954 7.08495 13.0002 6.69476 13.0002 6.214C13.0002 5.73323 13.3954 5.34304 13.8825 5.34304H21.1177Z"
                        fill="#3B5162"
                      ></path>
                    </svg>
                  </span>
                  <span>Filtrar ordenes</span>
                </div>
              </header>
              <table className="dashboard-table">
                <thead className="table-header"> 
                  <tr className="table-row">
                    <td className="customer-col">Cliente</td>
                    <td className="order-col">Orden</td>
                    <td className="total-col">Total</td>
                    <td className="status-col">Estado</td>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr className="row">
                    <td className="customer-col customer-data">
                      <div className="profile-image">
                        <img src="https://randomuser.me/api/portraits/thumb/men/2.jpg"/>
                      </div>
                      <span>Nombre cliente</span>
                    </td>
                    <td className="order-col">lorem ipsum dolor sit amet, consectetur adip</td>
                    <td className="total-col">$125</td>
                    <td className="status-col">
                      <span className="color-status completed">Completado</span>
                    </td>
                  </tr>
                  <tr className="row">
                    <td className="customer-col customer-data">
                      <div className="profile-image">
                        <img src="https://randomuser.me/api/portraits/thumb/men/3.jpg"/>
                      </div>
                      <span>Nombre cliente</span>
                    </td>
                    <td className="order-col">lorem ipsum dolor sit amet, consectetur adip</td>
                    <td className="total-col">$125</td>
                    <td className="status-col">
                      <span className="color-status preparing">Completado</span>
                    </td>
                  </tr>
                  <tr className="row">
                    <td className="customer-col customer-data">
                      <div className="profile-image">
                        <img src="https://randomuser.me/api/portraits/thumb/men/5.jpg"/>
                      </div>
                      <span>Nombre cliente</span>
                    </td>
                    <td className="order-col">lorem ipsum dolor sit amet, consectetur adip</td>
                    <td className="total-col">$125</td>
                    <td className="status-col">
                      <span className="color-status pending">Completado</span>
                    </td>
                  </tr>
                  <tr className="row">
                    <td className="customer-col customer-data">
                      <div className="profile-image">
                        <img src="https://randomuser.me/api/portraits/thumb/men/7.jpg"/>
                      </div>
                      <span>Nombre cliente</span>
                    </td>
                    <td className="order-col">lorem ipsum dolor sit amet, consectetur adip</td>
                    <td className="total-col">$125</td>
                    <td className="status-col">
                      <span className="color-status completed">Completado</span>
                    </td>
                  </tr>
                
                </tbody>
              </table>
            </div>
          </main>
        </div>
        <div className="column-2">
          <div className="height-100">
            <div className="box-content summary-container">
              <div className="summary">
                <header className="filter-header">
                  <h4 className="summary-title">Mas ordenados</h4>
                  <div class="btn-filter center">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.2374 14.0725C20.3126 14.0725 21.9996 15.7377 21.9996 17.7862C21.9996 19.8336 20.3126 21.5 18.2374 21.5C16.1621 21.5 14.4751 19.8336 14.4751 17.7862C14.4751 15.7377 16.1621 14.0725 18.2374 14.0725ZM18.2374 15.8144C17.135 15.8144 16.2397 16.6981 16.2397 17.7862C16.2397 18.8732 17.135 19.7581 18.2374 19.7581C19.3397 19.7581 20.235 18.8732 20.235 17.7862C20.235 16.6981 19.3397 15.8144 18.2374 15.8144ZM10.1172 16.9149C10.6042 16.9149 10.9995 17.3051 10.9995 17.7859C10.9995 18.2667 10.6042 18.6568 10.1172 18.6568H2.88316C2.39611 18.6568 2.00082 18.2667 2.00082 17.7859C2.00082 17.3051 2.39611 16.9149 2.88316 16.9149H10.1172ZM5.76229 2.5C7.83754 2.5 9.52457 4.16643 9.52457 6.21376C9.52457 8.26109 7.83754 9.92753 5.76229 9.92753C3.68821 9.92753 2 8.26109 2 6.21376C2 4.16643 3.68821 2.5 5.76229 2.5ZM5.76229 4.24192C4.66113 4.24192 3.76467 5.12681 3.76467 6.21376C3.76467 7.30072 4.66113 8.18561 5.76229 8.18561C6.86462 8.18561 7.7599 7.30072 7.7599 6.21376C7.7599 5.12681 6.86462 4.24192 5.76229 4.24192ZM21.1177 5.34304C21.6047 5.34304 22 5.73323 22 6.214C22 6.69476 21.6047 7.08495 21.1177 7.08495H13.8825C13.3954 7.08495 13.0002 6.69476 13.0002 6.214C13.0002 5.73323 13.3954 5.34304 13.8825 5.34304H21.1177Z"
                          fill="#3B5162"
                        ></path>
                      </svg>
                    </span>
                    <span>Hoy</span>
                  </div>
                </header>
                <div className="summary-content">
                  <div className="summary-item">
                    <div className="product-image center summary-product">
                      <img src="https://restaurantrestapi.herokuapp.com/api/products/5/image" />
                    </div>
                    <div className="summary-desc">
                      <div className="name">Descripcion para el plato</div>
                      <div className="qty">200 platos ordenados</div>
                    </div>
                  </div>
                  <div className="summary-item">
                    <div className="product-image center summary-product">
                      <img src="https://restaurantrestapi.herokuapp.com/api/products/15/image" />
                    </div>
                    <div className="summary-desc">
                      <div className="name">Descripcion para el plato</div>
                      <div className="qty">200 platos ordenados</div>
                    </div>
                  </div>
                  <div className="summary-item">
                    <div className="product-image center summary-product">
                      <img src="https://restaurantrestapi.herokuapp.com/api/products/25/image" />
                    </div>
                    <div className="summary-desc">
                      <div className="name">Descripcion para el plato</div>
                      <div className="qty">200 platos ordenados</div>
                    </div>
                  </div>
                </div>
                <div class="btn btn-secondary">Ver todos</div>
              </div>
            </div>
            <div className="box-content summary-container">
              <div className="summary">
                <header className="filter-header">
                  <h4 className="summary-title">Mayor tipo de orden</h4>
                  <div class="btn-filter center">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.2374 14.0725C20.3126 14.0725 21.9996 15.7377 21.9996 17.7862C21.9996 19.8336 20.3126 21.5 18.2374 21.5C16.1621 21.5 14.4751 19.8336 14.4751 17.7862C14.4751 15.7377 16.1621 14.0725 18.2374 14.0725ZM18.2374 15.8144C17.135 15.8144 16.2397 16.6981 16.2397 17.7862C16.2397 18.8732 17.135 19.7581 18.2374 19.7581C19.3397 19.7581 20.235 18.8732 20.235 17.7862C20.235 16.6981 19.3397 15.8144 18.2374 15.8144ZM10.1172 16.9149C10.6042 16.9149 10.9995 17.3051 10.9995 17.7859C10.9995 18.2667 10.6042 18.6568 10.1172 18.6568H2.88316C2.39611 18.6568 2.00082 18.2667 2.00082 17.7859C2.00082 17.3051 2.39611 16.9149 2.88316 16.9149H10.1172ZM5.76229 2.5C7.83754 2.5 9.52457 4.16643 9.52457 6.21376C9.52457 8.26109 7.83754 9.92753 5.76229 9.92753C3.68821 9.92753 2 8.26109 2 6.21376C2 4.16643 3.68821 2.5 5.76229 2.5ZM5.76229 4.24192C4.66113 4.24192 3.76467 5.12681 3.76467 6.21376C3.76467 7.30072 4.66113 8.18561 5.76229 8.18561C6.86462 8.18561 7.7599 7.30072 7.7599 6.21376C7.7599 5.12681 6.86462 4.24192 5.76229 4.24192ZM21.1177 5.34304C21.6047 5.34304 22 5.73323 22 6.214C22 6.69476 21.6047 7.08495 21.1177 7.08495H13.8825C13.3954 7.08495 13.0002 6.69476 13.0002 6.214C13.0002 5.73323 13.3954 5.34304 13.8825 5.34304H21.1177Z"
                          fill="#3B5162"
                        ></path>
                      </svg>
                    </span>
                    <span>Hoy</span>
                  </div>
                </header>
                <div className="summary-content">
                  <PieChart width={400} height={400}>
                    <Pie
                      activeIndex={activeIndex}
                      activeShape={renderActiveShape}
                      data={data}
                      cx={200}
                      cy={200}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      onMouseEnter={onPieEnter}
                    />
                  </PieChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { MainDashboard };