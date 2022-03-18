import React from 'react'
import pic1 from '../../images/pic1.jpg'
import {
  Container,
  PostCategories,
  PostCategory,
  PostDate,
  PostDesc,
  PostDescription,
  PostImg,
  PostInfo,
  PostTitle,
} from './PostElement'

const Post = () => {
  return (
    <Container>
      <PostImg src={pic1} alt='' />
      <PostInfo>
        <PostCategories>
          <PostCategory>Health</PostCategory>
          <PostCategory>Life</PostCategory>
        </PostCategories>
        <PostTitle>
          2022 is an exciting year for health and well-being with many
          innovative solutions to everyday health woes.
        </PostTitle>
        <hr />
        <PostDate>1 hour ago</PostDate>
      </PostInfo>
      <PostDescription>
        <PostDesc>
          1. Conscious eating- Are you more plant-curious than plant-based? Just
          because you're not ready to give up animal products, doesn't mean you
          can't be more considered in your choices. Make your meat count by
          choosing higher quality products and eating them less often.
        </PostDesc>
        <PostDesc>
          2. Mindful drinking- From no- and low-alcohol spirits to stylish
          mocktails, alcoholic beverages are getting a serious makeover. It's
          easier than ever to enjoy your favourite tipple without the booze, or
          elevate your glass to support your health with skin-loving matcha
          blends, gut-supportive kombucha and stress-relieving CBD.
        </PostDesc>
        <PostDesc>
          3. Food-focused remedies- Whether it's adding kefir to your smoothies,
          live yogurt to your salad dressings or matcha to your latte, 2022 is
          all about maximising your meals and supporting your health through the
          foods you eat.
        </PostDesc>
        <PostDesc>
          4. Personalised supplements- We're a little more unique when it comes
          to nutrition then previously believed. While humans require the same
          baseline of nutrients, various factors such as diet, stress,
          environment and even genetics can impact the types and quantities of
          vitamins and minerals we may require for optimal health. As such, 2022
          will see a rise in more bespoke and personalised supplements so that
          you can save your money where needed and spend where it matters.
        </PostDesc>
        <PostDesc>
          5. The 30 plants challenge- Studies suggest that those who eat at
          least 30 different plant-based foods per week had more diverse (i.e.
          healthier) gut microbes. Achieving this can be as simple as including
          more plant-based recipes into your weekly diet or choosing healthier
          versions of your favourite meals which often incorporate more plant
          foods such as fruits, vegetables and legumes. During busy times, there
          are some great products and gadgets that can make it even easier to
          accomplish your 30 plant foods.
        </PostDesc>
        <PostDesc>
          6. Fitness meets recovery- Recovery is no longer an adjunct to
          fitness. In fact, evidence is increasingly suggesting that adequate
          rest and recovery is just as (if not even more) important than intense
          sweat sessions for getting your body in shape-particularly when you're
          feeling stressed and rundown. In response to this, you'll be seeing
          plenty of recovery-focused gadgets on the market.
        </PostDesc>
        <PostDesc>
          7. Boosted beverages- Your humble brew is getting a nutritional
          makeover with many tea and coffee brands now adding additional
          benefits such as brain-boosting mushrooms, immune-supporting
          nutrients, skin-boosting collagen and stress-easing adaptogens to your
          daily cuppa.
        </PostDesc>
        <PostDesc>
          8. Considered convenience- With a greater awareness for the important
          role that food plays in how we feel, eating nourishing meals is a must
          for those of us who want to feel more focused, energised and balanced
          in our lives. While quick and healthy recipe options are a no-brainer
          for those of us who love to cook, convenience still needs to be an
          option for those busy days. Luckily, many food brands are rethinking
          their ready meal options, with more nutritious and sustainable
          options.
        </PostDesc>
        <PostDesc>
          9. Flavour meets function- Love a bit of spice in your meals? Want to
          add a touch of sweetness or perhaps a pinch of salt? Seasoning is no
          longer just about taste, but benefit. We're taking note of traditional
          medicinal and culinary practices such as Ayurveda and herbalism by
          choosing mineral-rich salts, high-quality spices and innovative
          sweeteners to both satisfy our palette and our well-being.
        </PostDesc>
        <PostDesc>
          10. Cooking as wellness- Trends in slow cooking, baking and
          breadmaking skyrocketed during the pandemic, and for good reason.
          Cooking is not just a necessity, but an opportunity to slow down,
          focus on the task at hand and offer something nourishing to your body.
          Stepping away from the busyness of your day and immersing yourself in
          the world of chopping, peeling, stirring and simmering, even just for
          15 minutes can act as moment of peace, calm and restoration in the
          hustle and bustle of most peoples lives. Even better, you get to enjoy
          your delicious creations afterwards.
        </PostDesc>
      </PostDescription>
    </Container>
  )
}

export default Post
