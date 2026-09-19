SELECT
    p."Name" AS "Priority",
    COALESCE(
        SUM(r."UsrTotalAmount"),
        0
    ) AS "TotalAmount"
FROM "UsrRequestPriority" p
LEFT JOIN "UsrEquipmentRequest" r
    ON r."UsrPriorityId" = p."Id"
    AND r."CreatedOn" >=
        date_trunc('month', CURRENT_DATE)
    AND r."CreatedOn" <
        date_trunc('month', CURRENT_DATE)
        + INTERVAL '1 month'
GROUP BY
    p."Id",
    p."Name"
ORDER BY
    p."Name";