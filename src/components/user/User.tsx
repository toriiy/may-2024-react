import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import './User.css'

type IUserProps = {
    user: IUser,
    showPosts: (user: IUser) => void
}
const User: FC<IUserProps> = ({user, showPosts}) => {

    return (
        <div key={user.id} className={'userDiv'}>
            <h2>Id: {user.id}</h2>
            <h3>First name: {user.firstName}</h3>
            <h3>Last name: {user.lastName}</h3>
            <h3>Maiden name: {user.maidenName}</h3>
            <img src={user.image} alt={user.firstName}/>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Username: {user.username}</p>
            <button onClick={() => {
                showPosts(user)
            }}>Show posts of this user
            </button>
            <p>Password: {user.password}</p>
            <p>Birth date: {user.birthDate}</p>
            <p>Blood group: {user.bloodGroup}</p>
            <p>Height: {user.height}</p>
            <p>Weight: {user.weight}</p>
            <p>Eye Color: {user.eyeColor}</p>
            <div>
                <h3>Hair:</h3>
                <p>Color: {user.hair.color}</p>
                <p>Type: {user.hair.type}</p>
            </div>
            <p>Ip: {user.ip}</p>
            <div>
                <h3>Address:</h3>
                <p>Address: {user.address.address}</p>
                <p>City: {user.address.city}</p>
                <p>State: {user.address.state}</p>
                <p>State code: {user.address.stateCode}</p>
                <p>Postal code: {user.address.postalCode}</p>
                <div>
                    <h4>Coordinates:</h4>
                    <p>Lat: {user.address.coordinates.lat}</p>
                    <p>Lng: {user.address.coordinates.lng}</p>
                </div>
                <p>Country: {user.address.country}</p>
            </div>
            <p>Mac address: {user.macAddress}</p>
            <p>University: {user.university}</p>
            <div>
                <h3>Bank:</h3>
                <p>Card expire: {user.bank.cardExpire}</p>
                <p>Card number: {user.bank.cardNumber}</p>
                <p>Card type: {user.bank.cardType}</p>
                <p>Currency: {user.bank.currency}</p>
                <p>Iban: {user.bank.iban}</p>
            </div>
            <div>
                <h3>Company:</h3>
                <p>Department: {user.company.department}</p>
                <p>Name: {user.company.name}</p>
                <p>Title: {user.company.title}</p>
                <div>
                    <h3>Address:</h3>
                    <p>Address: {user.company.address.address}</p>
                    <p>City: {user.company.address.city}</p>
                    <p>State: {user.company.address.state}</p>
                    <p>State code: {user.company.address.stateCode}</p>
                    <p>Postal code: {user.company.address.postalCode}</p>
                    <div>
                        <h4>Coordinates:</h4>
                        <p>Lat: {user.company.address.coordinates.lat}</p>
                        <p>Lng: {user.company.address.coordinates.lng}</p>
                    </div>
                    <p>Country: {user.company.address.country}</p>
                </div>
            </div>
            <p>Ein: {user.ein}</p>
            <p>Ssn: {user.ssn}</p>
            <p>User agent: {user.userAgent}</p>
            <div>
                <h3>Crypto:</h3>
                <p>Coin: {user.crypto.coin}</p>
                <p>Wallet: {user.crypto.wallet}</p>
                <p>Network: {user.crypto.network}</p>
            </div>
            <p>Role: {user.role}</p>
        </div>
    );
};

export default User;