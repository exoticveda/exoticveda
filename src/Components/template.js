import React, { useState } from 'react';

// Styling for the component
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  banner: {
    width: '100%',
    height: 'auto',
  },
  image: {
    width: '1080px',
    height: 'auto',
  },
  bulletPoints: {
    listStyleType: 'disc',
    marginLeft: '20px',
  },
  tips: {
    marginTop: '20px',
  },
};

const ProductForm = () => {
  const [formData, setFormData] = useState({
    banner: '',
    title: '',
    frontImage: '',
    backImage: '',
    bulletPoints: ['', '', '', '', '', ''],
    tips: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: URL.createObjectURL(files[0]) });
    } else if (name === 'bulletPoints') {
      const index = parseInt(e.target.dataset.index);
      const updatedBulletPoints = [...formData.bulletPoints];
      updatedBulletPoints[index] = value;
      setFormData({ ...formData, bulletPoints: updatedBulletPoints });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div style={styles.container}>
      <h1>Product Form</h1>
      <form>
        <label>
          Banner Image (970:30):
          <input type="file" name="banner" onChange={handleChange} />
        </label>
        <br />
        <label>
          Product Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Front Image (1080px):
          <input type="file" name="frontImage" onChange={handleChange} />
        </label>
        <br />
        <label>
          Back Image (1080px):
          <input type="file" name="backImage" onChange={handleChange} />
        </label>
        <br />
        <label>
          Bullet Points:
          {formData.bulletPoints.map((point, index) => (
            <div key={index}>
              <input
                type="text"
                name="bulletPoints"
                data-index={index}
                value={point}
                onChange={handleChange}
                placeholder={`Bullet Point ${index + 1}`}
              />
            </div>
          ))}
        </label>
        <br />
        <label>
          Tips for Hair Care:
          <textarea name="tips" value={formData.tips} onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={() => console.log(formData)}>Submit</button>
      </form>

      <div>
        <h2>Product Page Preview</h2>
        <img src={formData.banner} alt="Banner" style={styles.banner} loading="lazy" />
        <h3>{formData.title} </h3>
        <div className="iii" style={{display:'flex' }}>
        <img src={formData.frontImage} alt="Front" style={styles.image} loading="lazy" />
        <img src={formData.backImage} alt="Back" style={styles.image}  loading="lazy"/></div>
        <ul style={styles.bulletPoints}>
          {formData.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div style={styles.tips}>
          <h4>Tips for Hair Care:</h4>
          <p>{formData.tips}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
