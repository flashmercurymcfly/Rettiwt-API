export const config = {
    "server": {
        "port": 3000,
        "db": {
            "host": "mongodb://127.0.0.1",
            "port": 27017,
            "databases": {
                "ai-cache": {
                    "name": "ai-cache",
                    "collections": {
                        "users": "users",
                        "tweets": "tweets"
                    }
                }
            }
        }
    },
    "twitter": {
        "root_url": "https://twitter.com/",
        "auth": {
            "authToken": "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
            "csrfToken": "8803093c2b93c517faa06b8d1d48c2ba78303f1e442639db20647634549ae579fd367a4fc1aa24a2aa09a0bb61a4271187c8d18763818a36442160ccf3524a99c2f0ce5b13b49ff8fe02c9aca6e3ddfd",
            "cookie": "guest_id_marketing=v1%3A164420676322155370; guest_id_ads=v1%3A164420676322155370; personalization_id=\"v1_h5p6J1T7hvof7Eu+d/AHTQ==\"; guest_id=v1%3A164420676322155370; _ga=GA1.2.690652556.1644206766; _gid=GA1.2.792904356.1644206766; gt=1490537319618670593; _sl=1; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCBhEXNJ%252BAToMY3NyZl9p%250AZCIlZDMzMDVhODVkMTBlNzA2YzRkMmFlNjNhOWYzYWQ5ZTY6B2lkIiVlM2Jh%250AYTYwZTU4ZDYxYjc2NzRjZTQ3M2EyZmMwNDExYQ%253D%253D--e17e81c7fa6931bebdd27a421541c3891038d944; kdt=l2If38u1JyXXefmpqk6ePX4YUpBh0EGp6viq1d3L; auth_token=71160955da2e072d161b6e6bbd1bec76d79e526c; ct0=8803093c2b93c517faa06b8d1d48c2ba78303f1e442639db20647634549ae579fd367a4fc1aa24a2aa09a0bb61a4271187c8d18763818a36442160ccf3524a99c2f0ce5b13b49ff8fe02c9aca6e3ddfd; twid=u%3D1490533552408043522; att=1-P58cLwPiP6gJJCIFwaPF55MihAVLRLh6KVADxY36; lang=en"
        }
    }
}