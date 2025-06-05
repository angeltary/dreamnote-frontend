import { ApiRoutes } from '../constants'
import { CreateNoteRequest, Note, UpdateNoteRequest } from '../types'
import { instance } from './api-instance'

export const createNote = async (data: CreateNoteRequest) => {
  const response = (await instance.post<Note>(ApiRoutes.NOTES, data)).data

  return response
}

export const getNotes = async () => {
  const response = (await instance.get<Note[]>(ApiRoutes.NOTES)).data

  return response
}

export const getNote = async (id: string) => {
  const response = (await instance.get<Note>(`${ApiRoutes.NOTES}/${id}`)).data

  return response
}

export const updateNote = async (id: string, data: UpdateNoteRequest) => {
  const response = (await instance.patch<Note>(`${ApiRoutes.NOTES}/${id}`, data)).data

  return response
}

export const deleteNote = async (id: string) => {
  const response = (await instance.delete<Note>(`${ApiRoutes.NOTES}/${id}`)).data

  return response
}
