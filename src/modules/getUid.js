import {uid} from "uid";

export async function getUid(){
    const uid_user = await uid(6);

    return uid_user;
}

export async function loader(){
    const useruid = getUid();

    return {useruid};
}