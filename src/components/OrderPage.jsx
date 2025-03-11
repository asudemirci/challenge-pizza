import React, { useState } from 'react';
import './OrderPage.css';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardTitle, Button, ListGroup, ListGroupItem } from 'reactstrap';

const OrderPage = ({setCurrentStep, setOrderData }) => {
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [dough, setDough] = useState('');
    const [toppings, setToppings] = useState([]);
    const [notes, setNotes] = useState('');
    const [quantity, setQuantity] = useState(1);
    const basePrice = 85.5;

    const handleSizeChange = (selectedSize) => {
        setSize(selectedSize);
    }
    const handleDoughSelect = (selectedDough) => {
        setDough(selectedDough);
    }
    const handleToppingChange = (e) => {
        const topping = e.target.value;
        setToppings(prev => 
          e.target.checked 
            ? [...prev, topping] 
            : prev.filter(t => t !== topping)
        );
      }
    const handleQuantityChange = (type) => {
        setQuantity((prev) => {
            type === 'increase' ? prev + 1 : prev > 1 ? prev - 1 : prev
        })
    }
    const calculateTotal = () => {
        const toppingsPrice = toppings.length * 5;
        return (basePrice + toppingsPrice) * quantity;
    }
    const totalPrice = calculateTotal();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length < 3 || !size || !dough || toppings.length < 4) {
            alert('Lütfen tüm zorunlu alanları doldurun.');
            return;
        }
    const newOrder = {
        isim: name, 
        boyut: size,
        hamur: dough,
        malzemeler: toppings,
        özel: notes,
        miktar: quantity,
        toplamFiyat: calculateTotal(),
    };
    setOrderData(newOrder);
    setCurrentStep('confirmation');
}

    return (
        <div>
            <div className="banner-wrapper">
                <section>
                    <h1 className="banner-title">
                        Teknolojik Yemekler
                    </h1> 
                </section>            
            <Breadcrumb
            listTag="div"
            className="breadcrumb-nav breadcrumb-no-slash"
            >
                <BreadcrumbItem href="/" tag="a" className="crumb">
                Anasayfa
                 </BreadcrumbItem>
                 <BreadcrumbItem tag="a" className="crumb">
                 Seçenekler
                 </BreadcrumbItem>
                 <BreadcrumbItem href="/siparis-olustur" tag="a" className="crumb" style={{ color: 'white' }} >
                  Sipariş Oluştur
                 </BreadcrumbItem>
            </Breadcrumb>
            </div>
            <div className="order">
                <div className="order-content">
                    <h2 className="title">Position Absolute Acı Pizza</h2>
                      <div className="product-info">
                        <span className="price">85.50₺</span>
                        <span className="rating">
                            <p>4.9</p>
                            <p>(200)</p>
                        </span>
                      </div>
                      <p className="description">
                      Frontent Dev olarak hala position: absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
                     </p>
                    <form className="order-form" onSubmit={handleSubmit}>
                       <div className="size-dough-container"> 
                         <fieldset className="size-selection">
                            <legend style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                                Boyut Seç <span style={{ color: 'red'}}>*</span>
                            </legend>
                     <div className="size-options">
                        {['Küçük', 'Orta', 'Büyük'].map((sizeOption) => (
                            <label key={sizeOption} className="size-choice">
                                <input
                                type="radio"
                                name="size"
                                value={sizeOption}
                                checked={size === sizeOption}
                                onChange={(e) => handleSizeChange(e.target.value)}
                                />
                               {sizeOption}
                            </label>
                        ))}
                        
                     </div>   
                         </fieldset>
                         <fieldset className="dough-selection">
                            <legend style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                                Hamur Seç <span style={{color: 'red'}}>*</span>
                            </legend>
                            <select
                             className="dough-select"
                             value={dough}
                             onChange={(e) => handleDoughSelect(e.target.value)}
                            >
                                <option value="">Hamur Kalınlığı</option>
                                <option value="İnce">İncecik Hamur</option>
                                <option value="Normal">Normal Hamur</option>
                                <option value="Kalın">Kalın Hamur</option>
                            </select>
                         </fieldset>
                       </div>

                        <fieldset className="toppings-selection">
                            <legend style={{ fontSize: '1.5rem', fontWeight: 600 }}>Ek Malzemeler</legend>
                            <p>En Fazla 10 malzeme seçebilirsiniz.5₺</p>
                            <div className="toppings-grid">
                                {[
                                   'Pepperoni',
                                   'Domates',
                                   'Biber',
                                   'Sosis',
                                   'Mısır',
                                   'Sucuk',
                                   'Kanada Jambonu',
                                   'Sucuk',
                                   'Ananas',
                                   'Tavuk Izgara',
                                   'Jalepeno',
                                   'Kabak',
                                   'Soğan',
                                   'Sarımsak',  
                                ].map((topping) => (
                                    <label key={topping} className="toppings-space">
                                        <input
                                          type="checkbox"
                                          value={topping}
                                          checked={toppings.includes(topping)}
                                          onChange={(e) => handleToppingChange(e)}
                                        />
                                        {topping}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                        <div className="notes-section">
                            <label htmlFor="note" className="form-label">
                            <strong>Sipariş Notu</strong>
                            </label>
                            <input 
                            id="note"
                            name="note"
                            type="text"
                            className="not form-control"
                            placeholder='Siparişine eklemek istediğin bir not var mı?'
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            />
                        </div>

                        <div className='order-summary'>
                            <div className='quantity-controls'>
                                <button
                                type="button"
                                className='decrease-btn'
                                onClick={() => handleQuantityChange('decrease')}
                                >
                                -
                                </button>
                                <input 
                                type="text"
                                className="quantity-text"
                                readOnly
                                value={quantity}
                                />
                                 <button
                                type="button"
                                className='increase-btn'
                                onClick={() => handleQuantityChange('increase')}
                                >
                                +
                                </button>
                            </div>
                        <div className='d-flex justify-content-center'>
                        <Card
                            style={{
                                width: '22rem',
                                paddingTop: '45px',
                            }}
                            className='shadow-sm'
                            >
                            <CardBody>
                                <CardTitle tag="h5" className="fw-bold text-center">
                                Sipariş Toplamı
                                </CardTitle>
                                <ListGroup flush>
                      <ListGroupItem className="d-flex justify-content-between border-0">
                        <span>Seçimler</span>
                        <span className="fw-bold">{toppings.length * 5}₺</span>
                      </ListGroupItem>
                      <ListGroupItem className="d-flex justify-content-between border-0">
                        <span className="text-danger fw-bold">Toplam</span>
                       <span className="text-danger fw-bold">
                          {totalPrice}₺
                        </span>
                      </ListGroupItem>
                    </ListGroup>
                            </CardBody>
                            <div className="card-footer bg-transparent text-center p-0 border-0">
                    <Button
                      style={{
                        backgroundColor: '#F4C542',
                        borderColor: '#F4C542',
                        color: '#000',
                        paddingTop: '12px',
                      }}
                      className="w-100 fw-bold "
                    >
                      Sipariş Ver
                    </Button>
                  </div>
                        </Card>
                    </div>
                  </div>
                 <div>           
               </div>
             </form>
           </div>           
         </div>
       </div> 
    );
}
export default OrderPage;