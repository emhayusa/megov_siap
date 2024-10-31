import { combineReducers } from "redux";
import agama from "./agama";
import auth from "./auth";
import bank from "./bank";
import golongan_darah from "./golongan_darah";
import jabatan from "./jabatan";
import jenis_jabatan from "./jenis_jabatan";
import level_wilayah from "./level_wilayah";
import message from "./message";
import organisasi from "./organisasi";
import pangkat from "./pangkat";
import pegawai from "./pegawai";
import role from "./role";
import tipe_jabatan from "./tipe_jabatan";

import wilayah from "./wilayah";
import riwayat_jabatan from "./riwayat_jabatan";
import riwayat_satminkal from "./riwayat_satminkal";
import riwayat_pangkat from "./riwayat_pangkat";

export default combineReducers({
  agama,
  auth,
  bank,
  golongan_darah,
  jabatan,
  jenis_jabatan,
  level_wilayah,
  message,
  organisasi,
  pangkat,
  pegawai,
  role,
  tipe_jabatan,
  wilayah,
  riwayat_jabatan,
  riwayat_satminkal,
  riwayat_pangkat,
});
