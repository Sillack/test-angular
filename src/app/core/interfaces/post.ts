export interface Post {
      post_id: string,
      post_date: string,
      post_text: string,
      post_comments:[
        {
          comment_author: string,
          comment_author_profile: string,
          comment_text: string,
           Joy : number
           Anger : number,
           Disgust : number,
           Fear : number,
           Surprise : number,
           Sadness : number,
           customer_journey : number
        }
      ],
      post_reactions:
        {
           likes : number,
           reactions : {
             like : number,
             love : number,
             care : number,
             wow : number,
             sad : number,
             haha : number,
             angry : number
          }
        }
}
