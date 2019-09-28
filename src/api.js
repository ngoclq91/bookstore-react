import axios from 'axios';

/**
 * Define API
 * 
 * @author ngoclq91<ngocsonqs@gmail.com>
 */

export default {
    user: {
        /**
         * ユーザー認証 (サーバーに認証要求して、データーを取得)
         * 
         * @param credentials 認証情報
         * @returns {Promise<React.ReactNode | ((component: React.ReactType<FeedUserProps>, props: FeedUserProps, children?: (React.ReactNode | React.ReactNodeArray)) => (React.ReactElement<any> | null)) | FeedUserProps | default.user | {login} | Function | never>}
         */
        login: (credentials) => 
            axios.post('/api/auth', {credentials})
                .then(res => res.data.user),

        /**
         * 新規登録API
         * 
         * @param data 入力情報
         * @returns {Promise<React.ReactNode | ((component: React.ReactType<FeedUserProps>, props: FeedUserProps, children?: (React.ReactNode | React.ReactNodeArray)) => (React.ReactElement<any> | null)) | FeedUserProps | default.user | {login, signup} | Function | Login | never>}
         */
        signup: (data) => 
            axios.post('/api/users', {data})
                .then( res => res.data)
    }
}
