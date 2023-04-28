import React, { useCallback, useEffect, useState } from 'react';
import styles from './ShippingDetails.module.scss';
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-number-input';
import Input from '~components/Input';
import AddressForm from './AddressForm';
import useAuth from '~hooks/useAuth';
import PaymentTerm from '../PaymentTerm';
import { checkout } from '~apis/orders';
import Swal from 'sweetalert2';
import useShoppingCartStore from '~stores/useShoppingCartStore';
import useTranslation from '~hooks/useTranslation';

function ShippingDetails({ shippingCities, subTotal }) {
  const { t } = useTranslation();

  const { setProducts } = useShoppingCartStore();
  const router = useRouter();
  const { user } = useAuth();
  const [total, setTotal] = useState(subTotal);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+374');
  const [city, setCity] = useState(null);
  const [address, setAddress] = useState('');
  const [house, setHouse] = useState('');
  const [access, setAccess] = useState('');
  const [floor, setFloor] = useState('');
  const [intercom, setIntercom] = useState('');
  const [comment, setComment] = useState('');

  // Date time
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleConfirm = useCallback(async () => {
    const request = await checkout({
      fullName,
      phone,
      city,
      address,
      house,
      access,
      floor,
      intercom,
      date,
      time,
      comment,
      total,
    });
    const response = await request.json();

    if (response.status === 'success') {
      Swal.fire({
        title: t('checkout-page@order-successfully_created'),
        timer: 2000,
        showCancelButton: false,
        showConfirmButton: false,
        icon: 'success',
      }).then(() => {
        setProducts([]);
        router.push({
          pathname: '/cabinet/orders',
        });
      });
    }
  }, [
    fullName,
    phone,
    city,
    address,
    house,
    access,
    floor,
    intercom,
    date,
    time,
    comment,
    total,
  ]);

  const handleChangeTotal = useCallback((total) => {
    setTotal(total);
  }, []);

  useEffect(() => {
    setFullName(`${user.first_name} ${user.last_name}`);
    setPhone(user.phone);
  }, []);

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-md-12 col-lg-5 col-xl-5 order-1 order-lg-1">
          <h4>{t('checkout-page@recipient_section_title')}</h4>

          <div className="form-outline flex-fill mb-3">
            <Input
              id="full-name"
              label={t('checkout-page@recipient_full_name')}
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>

          <div
            className={`${styles['inputs-recipiment']} form-outline flex-fill mb-0`}
          >
            <PhoneInput
              placeholder={t('checkout-page@recipient_phone')}
              value={phone}
              countries={['AM']}
              defaultCountry="AM"
              onChange={setPhone}
            />
          </div>

          <AddressForm
            shippingCities={shippingCities}
            recipient={'someone'}
            city={city}
            handleCityChange={(event) => setCity(event.target.value)}
            address={address}
            handleAddressChange={(event) => setAddress(event.target.value)}
            house={house}
            handleHouseChange={(event) => setHouse(event.target.value)}
            access={access}
            handleAccessChange={(event) => setAccess(event.target.value)}
            floor={floor}
            handleFloorChange={(event) => setFloor(event.target.value)}
            intercom={intercom}
            handleIntercomChange={(event) => setIntercom(event.target.value)}
          />
        </div>

        <div className="col-md-12 col-lg-3 col-xl-3 order-2 order-lg-2">
          <h4>{t('checkout-page@date_time_section_title')}</h4>

          <div className="form-outline flex-fill mb-2">
            <label htmlFor="date">
              {t('checkout-page@date_time_section_date')}
            </label>
            <Input
              type="date"
              id="date"
              onChange={(event) => setDate(event.target.value)}
              value={date}
            />
          </div>

          <div className="form-outline flex-fill">
            <label htmlFor="time">
              {t('checkout-page@date_time_section_time')}
            </label>
            <select
              name="time"
              className="form-select"
              id="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            >
              <option value={''}>
                {t('checkout-page@date_time_section_select_time')}
              </option>

              <option value="11:00 - 18:00">11:00 - 18:00</option>

              <option value="00:00 - 01:00">00:00 - 01:00</option>

              <option value="01:00 - 02:00">01:00 - 02:00</option>

              <option value="02:00 - 03:00">02:00 - 03:00</option>

              <option value="03:00 - 04:00">03:00 - 04:00</option>

              <option value="04:00 - 05:00">04:00 - 05:00</option>

              <option value="05:00 - 06:00">05:00 - 06:00</option>

              <option value="06:00 - 07:00">06:00 - 07:00</option>

              <option value="07:00 - 08:00">07:00 - 08:00</option>

              <option value="08:00 - 10:00">08:00 - 10:00</option>

              <option value="11:00 - 13:00">11:00 - 13:00</option>

              <option value="13:00 - 16:00">13:00 - 16:00</option>

              <option value="15:00 - 18:00">15:00 - 18:00</option>

              <option value="18:00 - 21:00">18:00 - 21:00</option>

              <option value="20:00 - 22:00">20:00 - 22:00</option>

              <option value="22:00 - 23:00">22:00 - 23:00</option>

              <option value="23:00 - 00:00">23:00 - 00:00</option>
            </select>
          </div>
        </div>

        <div className="col-md-12 col-lg-4 col-xl-4 order-3 order-lg-3">
          <h4>{t('checkout-page@additional_info_section_title')}</h4>
          <div className="form-outline">
            <label htmlFor="comment">
              {t('checkout-page@additional_info_comment')}
              <textarea
                className="form-control"
                name="comment"
                cols="10"
                rows="5"
                id="comment"
                onChange={(event) => setComment(event.target.value)}
              >
                {comment}
              </textarea>
            </label>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center mt-5">
        <PaymentTerm
          subTotal={subTotal}
          city={city}
          shippingCities={shippingCities}
          handleChangeTotal={handleChangeTotal}
          handleConfirm={handleConfirm}
        />
      </div>
    </>
  );
}

export default ShippingDetails;
