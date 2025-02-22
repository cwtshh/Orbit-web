import { Session } from "next-auth";

export interface CustomUserSessionType extends Session{
    id: string;
    name: string;
    email: string;
    profile_photo_path: string;
    username: string;
    token: string;
}