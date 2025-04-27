import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import {
    chats as chatsData,
    contacts as contactsData,
    messages as messagesData,
} from 'app/mock-api/apps/chat/data';
import { assign, cloneDeep, omit } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class ChatMockApi
{
    private _chats: any[]    = chatsData;
    private _contacts: any[] = contactsData;
    private _messages: any[] = messagesData;

    /**
     * Constructor
     */
  constructor(private _fuseMockApiService: FuseMockApiService)
  {
    this.registerHandlers();

    // Chargement du profil réel
    const stored = localStorage.getItem('appUser');
    const profile = stored
      ? JSON.parse(stored)
      : { id: 'guest', name: 'Invité', email: '', avatar: undefined };

    // Pour chaque chat, on ne prend QUE ses messages
    this._chats = this._chats.map(chat =>
    {
      // 1) on filtre
      const chatMessages = this._messages
        .filter(msg => msg.chatId === chat.id)
        .map(message => ({
          ...message,
          contactId: message.contactId === 'me' ? profile.id : chat.contactId,
          isMine:    message.contactId === 'me'
        }));

      return {
        ...chat,
        contact : this._contacts.find(c => c.id === chat.contactId),
        messages: chatMessages
      };
    });
  }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Chats - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/chat/chats')
            .reply(() =>
            {
                const chats = cloneDeep(this._chats);
                return [200, chats];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Chat - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/chat/chat')
            .reply(({ request }) =>
            {
                const id    = request.params.get('id');
                const chats = cloneDeep(this._chats);
                const chat  = chats.find(item => item.id === id);
                return [200, chat];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Chat - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/chat/chat')
            .reply(({ request }) =>
            {
                const id   = request.body.id;
                const chat = cloneDeep(request.body.chat);
                let updatedChat = null;

                this._chats.forEach((item, index, chats) =>
                {
                    if (item.id === id)
                    {
                        chats[index]  = assign({}, chats[index], chat);
                        updatedChat   = chats[index];
                    }
                });

                return [200, updatedChat];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contacts - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/chat/contacts')
            .reply(() =>
            {
                let contacts = cloneDeep(this._contacts);
                contacts.sort((a, b) => a.name.localeCompare(b.name));
                contacts = contacts.map(c => omit(c, ['details', 'attachments']));
                return [200, contacts];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact Details - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/chat/contact')
            .reply(({ request }) =>
            {
                const id       = request.params.get('id');
                const contacts = cloneDeep(this._contacts);
                const contact  = contacts.find(item => item.id === id);
                return [200, contact];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Profile - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/chat/profile')
            .reply(() =>
            {
                // Return the real user profile from localStorage
                const stored = localStorage.getItem('appUser');
                const profile = stored
                    ? JSON.parse(stored)
                    : { id: 'guest', name: 'Invité', email: '', avatar: undefined };
                return [200, profile];
            });
    }
}
