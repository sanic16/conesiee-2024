'use server'

import * as auth from "@/auth"

export async function signInAction(){
    return auth.signIn()
}

export async function signOutAction(){
    return auth.signOut()
}