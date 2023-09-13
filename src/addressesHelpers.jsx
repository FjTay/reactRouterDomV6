import localforage from "localforage";
import { fakeBackEnd } from "./fakeBackend";

export async function getAddresses() {
  await fakeBackEnd();
  let addresses = await localforage.getItem("addresses")
  if (!addresses) addresses = []
  return addresses
}

export async function createAddress({address, addressName, city, country, postCode}) {
    await fakeBackEnd()
    let id = Math.random().toString(36).substring(2, 9)
    let newAddress = {address, addressName, city, country, postCode, id, createdAt: Date.now(), updatedAt: "", isFav: false}
    let addresses = await getAddresses()
    addresses.unshift(newAddress)
    await set(addresses)
    return newAddress
}

export async function getAddressct(id) {
  await fakeBackEnd(`address:${id}`)
  let addresses = await localforage.getItem("addresses")
  let address = addresses.find(address => address.id === id)
  return address ?? null
}

export async function updateaddress(id, updates) {
  await fakeBackEnd()
  let addresses = await localforage.getItem("addresses")
  let address = addresses.find(address => address.id === id)
  if (!address) throw new Error("No address found for", id)
  Object.assign(address, updates)
  await set(addresses)
  return address
}

export async function deleteAddress(id) {
  let addresses = await localforage.getItem("addresses")
  let index = addresses.findIndex(address => address.id === id)
  if (index > -1) {
    addresses.splice(index, 1)
    await set(addresses)
    return true
  }
  return false
}

function set(addresses) {
  return localforage.setItem("addresses", addresses)
}