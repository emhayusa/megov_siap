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
});
