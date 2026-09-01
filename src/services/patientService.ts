import axios from 'axios';
import type { Patient,ApiResponseDTO } from '../types/patient';

const API_URL = 'http://localhost:8080/api/v1/patients';

export const getPatients = async ():Promise<Patient[]> => {

    const response = await axios.get<ApiResponseDTO<Patient[]>>(API_URL);
    if(response.status === 204) return [];
    return response.data.data || [];
}

export const createPatient = async (patientData: Patient): Promise<Patient> => {
  const response = await axios.post<ApiResponseDTO<Patient>>(API_URL, patientData);
  return response.data.data;
};

export const updatePatient = async (id: number, patientData: Patient): Promise<Patient> => {
  const response = await axios.put<ApiResponseDTO<Patient>>(`${API_URL}/${id}`, patientData);
  return response.data.data;
};
