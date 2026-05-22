import React from "react";
import KpiTrendChart from "./KpiTrendChart";

const KpiCard = ({ data }) => {
  return (
    <div className="reports-card reports-kpi-card">
      <div className="kpi-top">
        <span className="kpi-title">{data.title}</span>

        {/* {data.badge && (
          <span className={`kpi-badge ${data.badgeClass}`}>{data.badge}</span>
        )} */}
      </div>

      {data.type === "health" ? (
        <div className="health-card-content">
          <div>
            <h3>{data.healthTitle}</h3>

            <p>{data.description}</p>
          </div>

          <div className="health-icon">{data.icon}</div>
        </div>
      ) : (
        <>
          <div className="kpi-main">
            <div className="kpi-content">
              <div>
                <h2 className={`kpi-value ${data.valueColor}`}>
                  {data.value}

                  {data.subValue && <span>{data.subValue}</span>}
                </h2>

                {data.analytics && (
                  <div className={`kpi-analytics ${data.trendColor}`}>
                    {data.analytics}
                  </div>
                )}

                {data.footer && (
                  <div className={`kpi-footer ${data.footerType}`}>
                    {data.footer}
                  </div>
                )}
              </div>

              {data.showRing ? (
                <div className={`kpi-ring ${data.ringColor}`}>
                  <div className="kpi-ring-inner">{data.ringText}</div>
                </div>
              ) : (
                <KpiTrendChart color={data.trendColor} data={data.trendData} />
              )}
            </div>
          </div>

          <p className="kpi-description">{data.description}</p>
        </>
      )}
    </div>
  );
};

export default KpiCard;
