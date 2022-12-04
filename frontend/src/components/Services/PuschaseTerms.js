import React from "react";
import { useTranslation } from "react-i18next";

export default function PuschaseTerms() {
  const { t } = useTranslation();
  return (
    <div className="w-5/6 mx-auto my-10">
      <h2 className="text-3xl font-bold mb-8"> {t("termsPage.title")}</h2>
      <ol>
        <li className="font-semibold mb-8">
          1. {t("termsPage.agreement")}
          <p className="font-light mt-4">
            {t("termsPage.agreementDescription")}
          </p>
        </li>
        <li className="font-semibold mb-8">
          2. {t("termsPage.subscription")}
          <p className="font-light mt-4">
            {t("termsPage.subscriptionDescription")}
          </p>
        </li>
        <li className="font-semibold mb-8">
          3. {t("termsPage.payment")}
          <p className="font-light mt-4">{t("termsPage.paymentDescription")}</p>
        </li>
        <li className="font-semibold mb-8">
          4. {t("termsPage.delivery")}
          <p className="font-light mt-4">
            {t("termsPage.deliveryDescription")}
          </p>
        </li>
        <li className="font-semibold mb-8">
          5. {t("termsPage.refund")}
          <p className="font-light mt-4">{t("termsPage.refundDescription")}</p>
        </li>
        <li className="font-semibold mb-8">
          6. {t("termsPage.rightOfWithdrawal")}
          <p className="font-light mt-4">
            {t("termsPage.rightOfWithdrawalDescription")}
          </p>
        </li>
        <li className="font-semibold mb-8">
          7. {t("termsPage.reclamation")}
          <p className="font-light mt-4">
            {t("termsPage.reclamationDescription")}
          </p>
        </li>
        <li className="font-semibold mb-8">
          8. {t("termsPage.maintenance")}
          <p className="font-light mt-4">
            {t("termsPage.maintenanceDescription")}
          </p>
        </li>
        <li className="font-semibold mb-8">
          9. {t("termsPage.transfer")}
          <p className="font-light mt-4">
            {t("termsPage.transferDescription")}
          </p>
        </li>
        <li className="font-semibold mb-8">
          10. {t("termsPage.suspension")}
          <p className="font-light mt-4">
            {t("termsPage.suspensionDescription")}
          </p>
        </li>
        <li className="font-semibold mb-8">
          11. {t("termsPage.minors")}
          <p className="font-light mt-4">{t("termsPage.minorsDescription")}</p>
        </li>
        <li className="font-semibold mb-8">
          12. {t("termsPage.personalData")}
          <p className="font-light mt-4">
            {t("termsPage.personalDataDescription")}
          </p>
        </li>
        <li className="font-semibold mb-8">
          13. {t("termsPage.limitationLiability")}
          <p className="font-light mt-4">
            {t("termsPage.limitationLiabilityDescription")}
          </p>
        </li>
        <li className="font-semibold mb-8">
          14. {t("termsPage.intellectualproperty")}
          <p className="font-light mt-4">
            {t("termsPage.intellectualpropertyDescription")}
          </p>
        </li>
        <li className="font-semibold mb-8">
          15. {t("termsPage.technical")}
          <p className="font-light mt-4">
            {t("termsPage.technicalDescription")}
          </p>
        </li>
        <li className="font-semibold mb-8">
          16. {t("termsPage.force")}
          <p className="font-light mt-4">{t("termsPage.forceDescription")}</p>
        </li>
        <li className="font-semibold mb-8">
          17. {t("termsPage.customerService")}
          <p className="font-light mt-4">
            {t("termsPage.customerServiceDescription")}
          </p>
        </li>
        <li className="font-semibold mb-8">
          18. {t("termsPage.other")}
          <p className="font-light mt-4">{t("termsPage.otherDescription")}</p>
        </li>
        <li className="font-semibold mb-8">
          19. {t("termsPage.applicable")}
          <p className="font-light mt-4">
            {t("termsPage.applicableDescription")}
          </p>
        </li>
      </ol>
    </div>
  );
}
