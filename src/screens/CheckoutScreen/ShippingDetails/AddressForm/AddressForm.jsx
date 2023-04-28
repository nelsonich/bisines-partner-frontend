import React from 'react';
import Input from '~components/Input';
import useTranslation from '~hooks/useTranslation';

// const FOR_ME = 'for_me';
const SOMEONE = 'someone';

function AddressForm({
  shippingCities,
  recipient,
  forMe = false,
  city,
  handleCityChange,
  address,
  handleAddressChange,
  house,
  handleHouseChange,
  access,
  handleAccessChange,
  floor,
  handleFloorChange,
  intercom,
  handleIntercomChange,
}) {
  const { locale, t } = useTranslation();
  const isDisable = recipient === SOMEONE && forMe;

  return (
    <div className="mt-2">
      <div className="form-outline flex-fill mb-2">
        <label htmlFor={`${recipient}-city`}>
          {t('checkout-page@recipient_city')}
        </label>
        <select
          id={`${recipient}-city`}
          className="form-select mt-2"
          disabled={isDisable}
          value={city}
          onChange={handleCityChange}
        >
          <option key="AddressFormOption" value={'null'}>
            {t('checkout-page@recipient_select_city')}
          </option>

          {shippingCities.map((city, index) => (
            <option key={`AddressFormOption-${index}`} value={city.id}>
              {city.translations[locale]}
            </option>
          ))}
        </select>
      </div>

      <div className="form-outline flex-fill">
        <Input
          id={`${recipient}-address`}
          type="text"
          disabled={isDisable}
          label={t('checkout-page@recipient_address')}
          value={address}
          onChange={handleAddressChange}
        />
      </div>

      <div className="d-flex gap-2 mt-2">
        <div className="form-outline flex-fill">
          <Input
            id={`${recipient}-house`}
            type="text"
            label={t('checkout-page@recipient_house')}
            disabled={isDisable}
            value={house}
            onChange={handleHouseChange}
          />
        </div>

        <div className="form-outline flex-fill">
          <Input
            id={`${recipient}-access`}
            type="text"
            label={t('checkout-page@recipient_access')}
            disabled={isDisable}
            value={access}
            onChange={handleAccessChange}
          />
        </div>

        <div className="form-outline flex-fill">
          <Input
            id={`${recipient}-floor`}
            type="text"
            label={t('checkout-page@recipient_floor')}
            disabled={isDisable}
            value={floor}
            onChange={handleFloorChange}
          />
        </div>

        <div className="form-outline flex-fill ">
          <Input
            id={`${recipient}-intercom`}
            type="text"
            label={t('checkout-page@recipient_intercom')}
            disabled={isDisable}
            value={intercom}
            onChange={handleIntercomChange}
          />
        </div>
      </div>
    </div>
  );
}

export default AddressForm;
