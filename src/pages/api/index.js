// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Airtable from 'airtable';
import fs from 'fs';
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_APP
);

export default async function handler(req, res) {
  // get data from airtable
  const allImages = await base('Images').select({}).all();

  const images = allImages.map((x) => x.fields);
  console.log('images', images);
  const xxx = images.map((e) => {
   

    return {
      id: e.id,
      pic:
        e.pic &&
        e.pic.map(async (p) => {
          // save image to public folder
          const path = `public/images/${e.id}`;

          // load image from airtable
          const response = await fetch(p.url);
          const buffer = await response.buffer();
          fs.writeFile(path, buffer, () =>
            console.log('finished downloading!')
          );

          const pathThumb = `public/images/thumbs/${e.id}`;
           const response2 = await fetch(p.thumbnails.large.url);
          const buffer2 = await response2.buffer();
          fs.writeFile(pathThumb, buffer2, () =>
            console.log('finished downloading!')
          );
          return {
            id: p.id,
            filename: p.filename,
            url: p.url,
            thumbnails: p.thumbnails,
          };
        }),
    };
  });
  res.status(200).json({
    xxx,
    events: allImages.map((x) => x.fields),
  });
}
